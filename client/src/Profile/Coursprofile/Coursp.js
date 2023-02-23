import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./Coursp.css";
import { Link, useNavigate } from "react-router-dom";
import { getcours } from "../../JS/Actions/Cours";
import { current } from "../../JS/Actions/User";
const isAuth = localStorage.getItem("token");

function Coursp() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
    dispatch(getcours());
  }, []);
  const mylist = [];
  const mymodule = [];
  const users = useSelector((state) => state.userReducer.user);
  const cour = useSelector((state) => state.coursReducer.coursList);
  console.log("la liste des cours est", cour);
  cour.forEach((el) => {
    if (el.participants.some((part) => part._id == users?._id)) {
      mylist.push(el);
    }
  });
  console.log("user course ", mylist);
  mylist.forEach((el) => {
    el.modules.map((element) => {
      mymodule.push(element);
    });
  });
  console.log("les modules are", mymodule);
  return (
    <div className="continue">
      <div className="bloclong">
        <div className="leftbloc">
          <div class="photo-left">
            <img src={users?.photo} className="imageprofile" />
          </div>
          <h4 class="name"> {users?.name}</h4>
          <p class="info">{users?.email}</p>
          <button
            className="logout_btn"
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
        <div className="pdfblock">
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
              <Link to="/my_messages">
                {" "}
                <li>My Messages</li>
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
          {users && users.isAdmin ? (
            <div className="blockinfo">
              <h1>You are the admin </h1>
              Go to <Link to="/admin">Dashboard</Link>
            </div>
          ) : (
            <div className="blockinfo">
              {mymodule && mymodule.length > 0 ? (
                mymodule.map((el) => (
                  <div className="pdfframe">
                    <h1>{el.name}</h1>

                    <iframe src={el.file} height="70%" width="100%"></iframe>
                  </div>
                ))
              ) : (
                <div style={{ height: "100vh" }} className="no_courses">
                  <h1 style={{ paddingTop: "40vh" }}>
                    Sorry , you are not submitted to any cours yet !
                  </h1>
                  <img
                    height={"250px"}
                    width={"250px"}
                    src="https://static.vecteezy.com/system/resources/previews/005/073/059/original/empty-box-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-vector.jpg"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Coursp;
