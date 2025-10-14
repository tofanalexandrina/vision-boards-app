import React, { useState } from "react";

const UploadPictureForm = ({ onClose, boards }) => {
  //for storing url of uploaded image
  const [file, setFile] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = () => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //to complete with code for uploading image and saving data
    console.log({ file, name, description, selectedBoard });
    onClose();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      //updating react state for later use
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
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
        Upload Picture
      </h3>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: "1px solid black",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          cursor: "pointer"
        }}
        onClick={() => document.getElementById("file-upload").click()}
      >
        <div style={{ fontSize: "24px", fontFamily: "inherit" }}>↑</div>
        <p style={{ margin: "5px 0 0" }}>click or drag and drop</p>
        <input
          style={{ display: "none" }}
          type="file"
          id="file-upload"
          onChange={handleChange}
          accept="image/*"
          required
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid black",
            fontFamily: "inherit"
          }}
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 8px 40px",
            marginBottom: "10px",
            border: "1px solid black",
            fontFamily: "inherit"
          }}
          placeholder="Description (Optional)"
        />
        <select
          value={selectedBoard}
          onChange={(e) => setSelectedBoard(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid black",
            fontFamily: "inherit"
          }}
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

        <button
          type="submit"
          style={{
            backgroundColor: "#C984A2",
            border: "1px solid black",
            padding: "8px 20px",
            float: "right",
            marginBottom: "20px",
            cursor: "pointer",
            fontFamily: "inherit"
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default UploadPictureForm;
