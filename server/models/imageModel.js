import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    prompt: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Image ||
mongoose.model("Image", imageSchema);