import React from "react";

const PhotoCard = ({photo}) => {
  return (
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
  );
};

export default PhotoCard;
