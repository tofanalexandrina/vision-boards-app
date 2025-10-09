import React from "react";

const BoardCard = ({board}) => {
  return (
    <div
      key={board.boardId}
      style={{
        backgroundColor: "white",
        border: "1px solid black",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#eee",
          marginBottom: "10px",
        }}
      ></div>
      <p style={{ margin: 0, fontWeight: "bold" }}>{board.boardName}</p>
    </div>
  );
};

export default BoardCard;
