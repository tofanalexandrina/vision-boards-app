import React, { useState } from "react";

const PhotoCard = ({ photo }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      key={photo.id}
      style={{
        position: "relative",
        backgroundColor: "#eee",
        border: "1px solid black",
        aspectRatio: "1/1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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

      {isHovering && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)", //70% white
            padding: "15px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            cursor: "pointer"
          }}
        >
          <h3 style={{ margin: "0 0 5px 0", color: "#000" }}>{photo.photoName}</h3>
          <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>
            {photo.photoDescription || "No description"}
          </p>
        </div>
      )}
    </div>
  );
};

export default PhotoCard;
