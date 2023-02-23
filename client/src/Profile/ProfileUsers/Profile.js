import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current, logout } from "../../JS/Actions/User";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./Profile.css";
const isAuth = localStorage.getItem("token");

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  return (
    <div className="continue">
      <div className="bloclong">
        <div className="leftbloc">
          <div class="photo-left">
            <img src={users.photo} className="imageprofile" />
          </div>
          <h4 class="name"> {users.name}</h4>
          <p class="info">{users.email}</p>

          <button
            class="btn btn-primary"
            type="button"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("isAdmin");
              navigate("/");
            }}
          >
            LOG OUT
          </button>
        </div>
        <div className="rightbloc">
          <div className="navprofile">
            <ul>
              <Link to="/profile/aboutme">
                {" "}
                <li>About me</li>
              </Link>
              <Link to="/profile/cours">
                {" "}
                <li>Courses</li>
              </Link>
              <Link to="/profile/edit">
                {" "}
                <li>Edit Profil</li>
              </Link>
              <Link to="/">
                {" "}
                <li>Home Page</li>
              </Link>
            </ul>
          </div>
          <div className="blocinfo"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;


