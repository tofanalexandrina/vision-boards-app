const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleContainerClick = (e) => {
    if (e.target === e.currentTarget) {
      //only close if clicking background, not modal
      onClose();
    }
  };

  return (
    <div
      onClick={handleContainerClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        background: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center",
        zIndex:1000
      }}
    >
      <div
        onClick={handleContainerClick}
        style={{
          background: "white",
          minWidth: 280,
          minHeight: 200,
          maxWidth: "90%",
          margin: "auto",
          padding: 0,
          border: "1px solid black",
          boxShadow: "2px solid black",
          position: "relative"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
