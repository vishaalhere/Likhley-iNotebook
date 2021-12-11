import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import noteContext from "../context/notes/noteContext";


const Navbar = (props) => {
  const a = useContext(noteContext);
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  },[location])
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${a.mode} bg-${a.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong style={{ color: "blue" }}>{props.title}</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginLeft: "7%", color: "black" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname=== "/" ? "active":" "} mx-3 
                  `}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname=== "/" ? " ":"active"} mx-3 
                  `}
                  to="/notes"
                >
                  {props.about}
                </Link>
              </li>
            </ul>
            <button
              type="button"
              onClick={a.toggleMode}
              className={`btn mx-2 btn-${
                a.mode === "dark" ? "light" : "dark"
              } shadow-none`}
            >
              {a.mode === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
