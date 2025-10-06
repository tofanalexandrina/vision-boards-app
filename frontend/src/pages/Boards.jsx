import React, { useState } from "react";
import Modal from "../components/Modal";
import { mockBoards } from "../data/mockBoards.js";

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
        textAlign: "center",
        margin: "auto",
        width: "50%",
        padding: "10px",
      }}
    >
      <h1>Your Vision Boards</h1>
      <div>
        {boards.map((board) => (
          <div key={board.boardId}>
            <h3>{board.boardName}</h3>
            <p>{board.boardDescription}</p>
          </div>
        ))}
      </div>
      <button
        style={{
          margin: "auto",
          width: "50px",
          height: "50px",
          backgroundColor: "white",
          borderRadius: "50%",
          cursor: "pointer",
          position: "fixed",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        onClick={handleOpen}
      >
        <img
          src="https://www.iconpacks.net/icons/2/free-plus-icon-3107-thumb.png"
          style={{ width: "70%", height: "60%" }}
        />
      </button>
      <Modal isOpen={open} onClose={handleClose}>
        <>
          <p>This is my modal </p>
        </>
      </Modal>
    </div>
  );
};

export default Boards;
