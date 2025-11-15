import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../../assets/image/logo.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">About</NavLink>
      </li>
      {
        user && <li>
        <NavLink to="/myApplications">My Applications</NavLink>
      </li>
      }
      {
        user && <li>
        <NavLink to="addJob">Add Job</NavLink>
      </li>
      }
      {
        user && <li>
        <NavLink to="myPostedJobs">My Posted Jobs</NavLink>
      </li>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <img className="w-16" src={logo} alt="" />
        <h3 className="btn btn-ghost normal-case text-xl">JOB PORTAL</h3>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <>
            <button className="btn" onClick={handleSignOut}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/signIn" className="btn">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
