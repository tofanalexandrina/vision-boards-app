import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div
        className="navbar-items"
        style={{
          textAlign: "center",
          margin: "auto",
          width: "50%",
          padding: "20px",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "#C984A2",
            color: "black",
            padding: "10px",
            textDecoration: "none",
            border: isActive ? "1px solid black" : "none",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/boards"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "#C984A2",
            color: "black",
            padding: "10px",
            textDecoration: "none",
            border: isActive ? "1px solid black" : "none",
          })}
        >
          Boards
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
