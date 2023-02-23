import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../../JS/Actions/User";
import { Link, useNavigate } from "react-router-dom";
import "./Edit.css";
import { edituser } from "../../JS/Actions/listuser";
import { ToastContainer } from "react-toastify";
const isAuth = localStorage.getItem("token");

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  const [editpro, seteditpro] = useState({});
  const [image, setImage] = useState("");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "dno1kmnjv");
    data.append("cloud_name", "dno1kmnjv");
    fetch("https://api.cloudinary.com/v1_1/dno1kmnjv/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        seteditpro({ ...editpro, photo: data.url });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    uploadImage();
  }, [image]);

  return (
    <div className="continue">
      <div className="bloclong">
        <div className="leftbloc">
          <div class="photo-left">
            <img src={users && users.photo} className="imageprofile" />
          </div>
          <h4 class="name"> {users && users.name}</h4>
          <p class="info">{users && users.email}</p>
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
          <div className="blocinfo">
            <div className="formedit">
              <input
                type="text"
                placeholder={users && users.name}
                className="inputname"
                onChange={(e) => {
                  seteditpro({ ...editpro, name: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="inputname"
                onChange={(e) => {
                  seteditpro({ ...editpro, lastname: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder={users && users.email}
                className="inputname"
                onChange={(e) => {
                  seteditpro({ ...editpro, email: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder={users ? users.phone : "phone"}
                className="inputname"
                onChange={(e) => {
                  seteditpro({ ...editpro, phone: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="address"
                className="inputname"
                onChange={(e) => {
                  seteditpro({ ...editpro, adresse: e.target.value });
                }}
              />

              <div className="image_upload">
                {" "}
                <input
                  className="inputname"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <img
              src={image.length < 1 ? users && users.photo : editpro.photo}
              width="200"
              height={"200"}
              style={{ marginBottom: "5px" }}
            />
            <button
              className="upload_btn"
              onClick={() => {
                dispatch(edituser({ id: users._id, user: editpro }));
              }}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Edit;
