import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { current } from "../../../JS/Actions/User";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
function Navbar() {
  const isAuth = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <ul className=" nav-links">
          <li className="center">
            <Link to={users && users.isAdmin ? "/admin" : "/"}>Home</Link>
          </li>

          <li className="forward">
            <Link to="/cours">Courses</Link>
          </li>
          <li className="forward">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="log">
          {!isAuth ? (
            <>
              {" "}
              <Link to="/sign">
                <button className="login slide">
                  <span>Sign In</span>
                </button>
              </Link>
              <Link to="/sign">
                {" "}
                <button className="register">
                  {" "}
                  <span>Sign Up</span>
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="">
                <button
                  className="register"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("isAdmin");
                    navigate("/");
                  }}
                >
                  <span>Logout</span>
                </button>{" "}
              </Link>
              <Link to={users && users.isAdmin ? "/admin" : "/profile/aboutme"}>
                <button className="login slide">
                  <span>Profil</span>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

