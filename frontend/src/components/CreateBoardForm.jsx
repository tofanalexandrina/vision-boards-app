import React, { useState } from "react";

const CreateBoardForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, description });
    onClose();
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
      <form>
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
            padding: "8px",
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
