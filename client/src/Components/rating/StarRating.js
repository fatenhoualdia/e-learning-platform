import { useState } from "react";
import { useDispatch } from "react-redux";
import "./StarRating.css";
import { ratecours } from "../../JS/Actions/Cours";

const StarRating = ({ id }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleRating = (index) => {
    setRating(index);
    dispatch(ratecours({ id, index }));
  };
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => handleRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
