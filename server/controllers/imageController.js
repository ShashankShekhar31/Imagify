import axios from "axios"
import userModel from "../models/userModel.js"
import FormData from "form-data"
import imageModel from "../models/imageModel.js";

export const generateImage = async (req, res) => {
  try {
    const userId = req.userId;
    const { prompt } = req.body;

    if (!userId || !prompt) {
      return res.status(400).json({
        success: false,
        message: "Missing userId or prompt",
      });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.creditBalance <= 0) {
      return res.status(402).json({
        success: false,
        message: "Insufficient Credits",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data: imageBuffer } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(imageBuffer, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    user.creditBalance -= 1;
    await user.save();

    await imageModel.create({
      userId,
      prompt,
      imageUrl: resultImage,
    });

    return res.status(200).json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance,
      resultImage,
    });

  } catch (error) {
    console.error("generateImage error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

export const getUserImages = async (req, res) => {
  try {

    const userId = req.userId;

    const images = await imageModel
      .find({ userId })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      images,
    });

  } catch (error) {

    res.json({
      success: false,
      message: error.message,
    });

  }
};

export default generateImage;