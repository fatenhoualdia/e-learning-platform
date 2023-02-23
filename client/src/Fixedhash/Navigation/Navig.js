import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { current, logout } from "../../JS/Actions/User";
import "./Navig.css";
import { Link } from "react-router-dom";
const isAuth = localStorage.getItem("token");

function Navig() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  return (
    <div class="home">
      <div className="nav">
        <div class="sidebar-button">
          <span class="dashboard">Dashboard</span>
        </div>

        <div class="profile-details dropdown">
          <img
            src={
              users
                ? users.photo
                : "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?k=20&m=846183008&s=170667a&w=0&h=WIxZSP7aJ9jSvW3xqzDsWSI5g666kVBBgCNkABzYs68="
            }
          />
          <span class="admin_name dropbtn">{users ? users.name : ""}</span>
          <ion-icon
            name="chevron-down-outline"
            class="bx bx-chevron-down"
          ></ion-icon>
          <div class="dropdown-content">
            <Link to="/admin">
              <ion-icon name="home-outline"></ion-icon> Home
            </Link>
            <Link to="/profile/editAdmin">
              <ion-icon name="create-outline"></ion-icon> Edit Profil
            </Link>
            <a
              href="#"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("isAdmin");
                navigate("/");
              }}
            >
              <ion-icon name="log-out-outline"></ion-icon> Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navig;
