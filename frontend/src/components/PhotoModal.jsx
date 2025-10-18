import React, { useEffect, useState } from "react";
import Modal from "./Modal.jsx";
import { mockBoardImage } from "../data/mockBoardImage.js";
import { mockBoards } from "../data/mockBoards.js";

const PhotoModal = ({ isOpen, onClose, photo }) => {
  const [boardName, setBoardName] = useState("");

  useEffect(() => {
    if (photo) {
      const boardImageRelation = mockBoardImage.find(
        (relation) => relation.imageId === photo.photoId
      );

      if (boardImageRelation) {
        const board = mockBoards.find(
          (board) => board.boardId === boardImageRelation.boardId
        );

        if (board) {
          setBoardName(board.boardName);
        }
      }
    }
  }, [photo]);

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
            {boardName || ""}
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
              marginBottom: "10px",
              overflow: "hidden",
              border: "1px solid black"
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
