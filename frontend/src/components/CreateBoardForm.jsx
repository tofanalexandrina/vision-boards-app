import React, { useState } from "react";
import boardService from "../services/boardService.js";

const CreateBoardForm = ({ onClose, onCreated }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBoard=await boardService.createBoard({
        boardName: name,
        boardDescription: description,
        userId: 'u1'
      });
      onCreated?.(newBoard);
      onClose();
    } catch (error) {
      console.error("Create board failed:", err);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        width: "400px",
        maxWidth: "100%",
      }}
    >
      <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
        Create Board
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid black",
            fontFamily: "inherit",
          }}
          required
        />
        <input
          type="text"
          placeholder="Description (Optional)"
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 8px 40px",
            marginBottom: "10px",
            border: "1px solid black",
            fontFamily: "inherit",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#C984A2",
            border: "1px solid black",
            padding: "8px 20px",
            float: "right",
            marginBottom: "20px",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateBoardForm;
