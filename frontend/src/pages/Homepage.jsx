import React, { useState } from "react";
import { mockPhotos } from "../data/mockPhotos.js";

const Homepage = () => {
  const [photos, setPhotos] = useState(mockPhotos);

  return (
    <div
      className="homepage"
      style={{
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              backgroundColor: "#eee",
              border: "1px solid black",
              aspectRatio: "1/1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={photo.imageUrl}
              alt={photo.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
