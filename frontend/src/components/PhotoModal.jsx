import React from "react";
import Modal from "./Modal.jsx";

const PhotoModal = ({ isOpen, onClose, photo }) => {
  if (!photo) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        style={{
          backgroundColor: "white",
          width: "600px",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "10px 20px" }}>
          <h3 style={{ margin: "5px 0", textAlign: "left", opacity: "50%" }}>
            Board
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 20px 20px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "350px",
              border: "1px solid black",
              marginBottom: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src={photo.imageUrl}
              alt={photo.photoName}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "100%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <div style={{ fontWeight: "bold" }}>{photo.photoName}</div>
            <div>{photo.photoDescription || ""}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PhotoModal;
