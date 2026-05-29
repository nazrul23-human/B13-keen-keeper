import { NavLink } from "react-router-dom";
import { FaHome, FaClock, FaChartPie } from "react-icons/fa";

const Navbar = () => {

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-700"
          }
        >
          <FaHome />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-700"
          }
        >
          <FaClock />
          Timeline
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-700"
          }
        >
          <FaChartPie />
          Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm px-4">

      {/* Left Side */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <a className="text-2xl font-bold text-black-500">
          Keen<a className="text-2xl font-bold text-blue-500">Keeper</a>
        </a>
      </div>

      {/* Right Side Desktop */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navLinks}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;