import React, { useState } from "react";

const CreateBoardForm = ({ onClose }) => {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        display: "grid",
        gap: "10px",
      }}
    >
      <h3 style={{ marginBottom: "20px", whiteSpace: "nowrap" }}>
        Create Board
      </h3>
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Description (Optional)" />
      <input type="submit" value="Add" />
    </div>
  );
};

export default CreateBoardForm;
