import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const History = () => {
  const { backendUrl, token } = useContext(AppContext);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/history",
        {},
        {
          headers: { token },
        }
      );

      if (data.success) {
        setImages(data.images);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const deleteImage = async (id) => {
    try {
      const { data } = await axios.delete(
        backendUrl + "/api/image/delete/" + id,
        {
          headers: { token },
        }
      );

      if (data.success) {
        fetchHistory();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      const { data } = await axios.put(
        backendUrl + "/api/image/favorite/" + id,
        {},
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        fetchHistory();
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchHistory();
    }
  }, [token]);

  if (loading) {
    return (
      <div className="text-center mt-20">
        Loading history...
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] py-10">
      <h1 className="text-3xl font-bold mb-8">
        Image History
      </h1>

      {images.length === 0 ? (
        <p>No generated images yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow p-4"
            >
              <img
                src={item.imageUrl}
                alt={item.prompt}
                className="rounded-lg mb-4 w-full"
              />

              <div className="flex justify-between items-center">
                <p className="font-semibold">
                  {item.prompt}
                </p>
                <button
                onClick={() => toggleFavorite(item._id)}
                className="text-2xl"
                >
                  {item.favorite ? "❤️" : "🤍"}
                  </button>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>

              <div className="flex gap-3">
                <a
                  href={item.imageUrl}
                  download
                  className="bg-black text-white px-4 py-2 rounded-lg"
                >
                  Download
                </a>

                <button
                  onClick={() => deleteImage(item._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;