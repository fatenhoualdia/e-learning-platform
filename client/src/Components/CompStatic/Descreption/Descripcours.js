import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Descripcours.css";
import { editcours, getcours } from "../../../JS/Actions/Cours";
import { current } from "../../../JS/Actions/User";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Descripcours() {
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [participant, setparticipant] = useState();
  const [tab, settab] = useState(0);
  const users = useSelector((state) => state.userReducer.user);
  const isAuth = localStorage.getItem("token");
  const [cour, setcour] = useState({});
  const [part, setpart] = useState([]);
  useEffect(async () => {
    let result = await axios
      .get(`http://localhost:5000/cours/${params.id}`)
      .then((res) => setcour(res.data.result));
  }, []);

  const handleParticipate = () => {
    if (!isAuth) {
      navigate("/sign");
    }
    if (cour.participants?.length < cour?.nbrPartic) {
      //dispatch participate
      dispatch(
        editcours({
          id: cour._id,
          participant: { name: users.name, _id: users._id },
        })
      );
      toast("new course add");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      //navigate to sign in
      <h1> n'ya plus du place</h1>;
    }
  };

  return (
    <div>
      <Navbar />
      <div class="containercours">
        <section class="cards1">
          <article class="cardcours card-1">
            <div class="cards">
              <div class="photo">
                <img src={cour.photo} />
              </div>
              <div class="description">
                <h2>{cour.nameCours}</h2>
                <h2>{cour.participants?.length}</h2>
                {cour.isFree == "free" ? (
                  <h1 class="pricecoursfree">{cour.isFree}</h1>
                ) : (
                  <h1 class="pricecoursprice">{cour.price}DT</h1>
                )}
                <h4>{cour.nbrPartic} participants</h4>
                <p>{cour.description}</p>
                <button className="upload_btn" onClick={handleParticipate}>
                  Participer
                </button>{" "}
              </div>
            </div>
          </article>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Descripcours;
