import React, { useState } from "react";

const UploadPictureForm = ({ onClose, boards }) => {
  //for storing url of uploaded image
  const [file, setFile] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState("");

  const handleChange = () => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

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
        Upload Picture
      </h3>
      <input type="file" onChange={handleChange} accept="image/*" required />
      {file && <img src={file} alt="Preview" />}
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Description (Optional)" />
      <select
        value={selectedBoard}
        onChange={(e) => setSelectedBoard(e.target.value)}
      >
        <option value="" disabled>
          Board
        </option>
        {boards.map((board) => (
          <option key={board.boardId} value={board.boardId}>
            {board.boardName}
          </option>
        ))}
      </select>

      <input type="submit" value="Add" />
    </div>
  );
};

export default UploadPictureForm;
