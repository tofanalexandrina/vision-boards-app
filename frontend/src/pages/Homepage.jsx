import React, { useState } from "react";
import { mockPhotos } from "../data/mockPhotos.js";
import PhotoCard from "../components/PhotoCard.jsx";

const Homepage = () => {
  const [photos, setPhotos] = useState(mockPhotos);

  return (
    <div
      className="homepage"
      style={{
        padding: "10px 50px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          margin: "0 auto",
        }}
      >
        {photos.map((photo) => (
          <PhotoCard key={photo.photoId} photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
