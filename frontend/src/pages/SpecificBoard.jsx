import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mockPhotos } from "../data/mockPhotos.js";
import { mockBoards } from "../data/mockBoards.js";
import PhotoCard from "../components/PhotoCard.jsx";

const SpecificBoard = () => {
  const [board, setBoard] = useState(null);
  const [photos, setPhotos] = useState([]);
  const { boardId } = useParams();

  //this effect runs whenever the value of boardId changes
  useEffect(() => {
    const foundBoard = mockBoards.find((board) => board.boardId === boardId);
    setBoard(foundBoard);
    //here i'll fetch photos for the board from the API
    setPhotos(mockPhotos);
  }, [boardId]);

  if (!board) return <div>Loading...</div>;

  return (
    <div style={{ padding: "10px 50px" }}>
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          textAlign: "center",
          padding: "10px",
          marginBottom: "15px",
          margin: "0 auto 15px auto",
        }}
      >
        <h2>{board.boardName}</h2>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        margin: "0 auto"
      }}>
        {photos.map((photo) => (
          <PhotoCard key={photo.photoId} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default SpecificBoard;
