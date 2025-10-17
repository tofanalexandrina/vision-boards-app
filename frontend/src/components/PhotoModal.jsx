import React from "react";
import Modal from "./Modal.jsx";

const PhotoModal = ({ isOpen, onClose, photo }) => {
  if (!photo) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <div>
          <h2>Board</h2>
        </div>
        <div>
          <div>
            <img />
          </div>
          <div>
            <div>{photo.photoName}</div>
            <div>{photo.photoDescription || ""}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PhotoModal;
