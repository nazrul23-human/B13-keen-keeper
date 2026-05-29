import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;