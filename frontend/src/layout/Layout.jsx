import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      style={{
        backgroundColor: "#C984A2",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
