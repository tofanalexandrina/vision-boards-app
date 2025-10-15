import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockPhotos } from "../data/mockPhotos.js";
import { mockBoards } from "../data/mockBoards.js";
import { mockBoardImage } from "../data/mockBoardImage.js";
import PhotoCard from "../components/PhotoCard.jsx";

const SpecificBoard = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState(null);
  const [photos, setPhotos] = useState([]);
  const { boardId } = useParams();

  const handleBack = () => {
    navigate("/boards");
  };

  //this effect runs whenever the value of boardId changes
  useEffect(() => {
    //find current board
    const foundBoard = mockBoards.find((board) => board.boardId === boardId);
    setBoard(foundBoard);

    //find boardImage relationships for board
    if (foundBoard) {
      const boardImageRelationships = mockBoardImage.filter(
        (bi) => bi.boardId === boardId
      );

      //get imageIds that belong to this board
      const boardImageIds = boardImageRelationships.map((bi) => bi.imageId);

      //filter photos, incluse those that belong to board
      const boardPhotos = mockPhotos.filter((photo) =>
        boardImageIds.includes(photo.photoId)
      );
      //here i'll fetch photos for the board from the API
      setPhotos(boardPhotos);
    }
  }, [boardId]);

  if (!board) return <div>Loading...</div>;

  return (
    <div style={{ padding: "10px 50px" }}>
      <button
        onClick={handleBack}
        style={{
          border: "1px solid black",
          backgroundColor: "white",
          padding: "5px 15px",
          marginBottom: "15px",
          fontFamily: "inherit",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ← Back
      </button>
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          margin: "0 auto",
        }}
      >
        {photos.length > 0 ? (
          photos.map((photo) => <PhotoCard key={photo.photoId} photo={photo} />)
        ) : (
          <div>It's pretty empty here...</div>
        )}
      </div>
    </div>
  );
};

export default SpecificBoard;
