import React, { useState } from "react";
import Modal from "../components/Modal";
import { mockBoards } from "../data/mockBoards.js";
import BoardCard from "../components/BoardCard.jsx";

const Boards = () => {
  const [open, setOpen] = useState(false);
  const [boards, setBoards] = useState(mockBoards);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div
      className="boards"
      style={{
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {boards.map((board) => (
          <BoardCard key={board.boardId} board={board}></BoardCard>
        ))}
      </div>
      <button
        style={{
          margin: "auto",
          width: "40px",
          height: "40px",
          backgroundColor: "white",
          border: "1px solid black",
          cursor: "pointer",
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleOpen}
      >
        <span style={{ fontSize: "24px", lineHeight: 1 }}>+</span>
      </button>
      <Modal isOpen={open} onClose={handleClose}>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h3 style={{ marginBottom: "20px", whiteSpace: "nowrap" }}>
            What would you like to do?
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <button
              style={{
                padding: "12px 20px",
                backgroundColor: "white",
                border: "1px solid black",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "16px",
              }}
            >
              Upload Picture
            </button>
            <button
              style={{
                padding: "12px 20px",
                backgroundColor: "white",
                border: "1px solid black",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "16px",
              }}
            >
              Create Board
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Boards;
