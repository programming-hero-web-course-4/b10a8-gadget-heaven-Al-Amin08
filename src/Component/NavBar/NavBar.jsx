import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavBar.css";
const NavBar = ({ location }) => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={
        location === "/"
          ? "bg-[#9538E2] text-white w-11/12 mx-auto rounded-t-2xl"
          : "bg-white text-[#0B0B0BB3] -mt-7 mx-auto rounded-t-2xl"
      }
    >
      <div className="navbar   w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold text-[#09080F99]"
            >
              {links}
            </ul>
          </div>
          <a
            className={
              location === "/"
                ? "btn btn-ghost lg:text-xl font-bold text-white"
                : "btn btn-ghost lg:text-xl font-bold text-[#9538E2]"
            }
          >
            Gadget Heaven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{links}</ul>
        </div>
        <div className="navbar-end ">
          <a className="bg-white p-2 cursor-pointer rounded-full ">
            <img
              className="lg:w-6 w-3"
              src="https://img.icons8.com/?size=100&id=85080&format=png&color=000000"
              alt=""
            />
          </a>
          <a className="bg-white ml-2 p-2 cursor-pointer rounded-full">
            <img
              className="lg:w-6 w-3"
              src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  location: PropTypes.string,
};
export default NavBar;
