/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { fetchPhotos } from "../../services/pexelsService";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchPhotos(searchTerm || "nature");
      setImages(data);
      setLoading(false);
    };
    loadImages();
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-4xl font-bold text-center mb-6">
        Galeria de Imagens
      </h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Busque por imagens..."
          className="p-2 w-80 rounded-lg text-black border border-gray-300"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {loading ? (
        <p className="text-center">Carregando imagens...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src.medium}
                alt={image.alt}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
