import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getcours } from "../../../JS/Actions/Cours";
import Navbar from "../Navbar/Navbar";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Courses.css";
import StarRating from "../../rating/StarRating";

function Courses() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcours());
  }, []);
  const cours = useSelector((state) => state.coursReducer.coursList);
  return (
    <div className="courses">
      <Navbar />
      <h1 className="heading"> our famous courses </h1>

      <div class="containercours">
        <div class="cardsc grid-row">
          {cours
            ? cours.map((el) => (
                <div class="card1cours">
                  <StarRating id={el._id} />
                  <div class="card-info">
                    <div
                      class="pricecoursfree"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span className="btnsuccess read-more">
                        current evaluation{" "}
                      </span>
                      {el.ratings && el.ratings.length > 1 ? (
                        Math.round(
                          (el.ratings.reduce(
                            (partialSum, a) => partialSum + a,
                            0
                          ) *
                            10) /
                            el.ratings.length
                        ) /
                          10 +
                        "/5"
                      ) : (
                        <div class="card-info">not yet rated</div>
                      )}{" "}
                    </div>
                  </div>
                  <div class="card-top">
                    <img src={el.photo} alt="" />
                  </div>
                  <div class="card-info">
                    <h2>{el.nameCours}</h2>
                  </div>

                  <div class="card-bottom flex-row">
                    <Link to={`/cours/${el._id}`}>
                      {" "}
                      <button className="btnsuccess read-more">
                        Read More
                      </button>
                    </Link>

                    <a href="#" class="buttoncours btn-yellow">
                      {el.isFree == "free" ? (
                        <div class="pricecoursfree">{el.isFree}</div>
                      ) : (
                        <div class="pricecoursprice">{el.price} DT</div>
                      )}
                    </a>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Courses;

