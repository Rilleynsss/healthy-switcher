import { useState } from "react";
const Rating = () => {
  const [rating, setRating] = useState();
  const [ratingClick, setRatingClick] = useState();

  return (
    <div className="full-stars">
      <svg width={0} height={0} xmlns="http://www.w3.org/2000/svg">
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          id="star"
          className="transition-all duration-300 cursor-pointer"
        >
          <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" />
        </symbol>
      </svg>
      <div className="flex">
        <svg
          width="24"
          height="24"
          fill={`${
            rating >= 1 || ratingClick >= 1
              ? "rgba(249, 173, 61, 1)"
              : " rgba(249, 174, 61, 0.307)"
          }`}
          onMouseEnter={(e) => {
            setRating(1);
          }}
          onMouseLeave={() => setRating(0)}
          onClick={() => setRatingClick(1)}
        >
          <use href="#star" />
        </svg>
        <svg
          width="24"
          height="24"
          fill={`${
            rating > 1 || ratingClick > 1
              ? "rgba(249, 173, 61, 1)"
              : " rgba(249, 174, 61, 0.307)"
          }`}
          onMouseEnter={(e) => {
            setRating(2);
          }}
          onMouseLeave={() => setRating(0)}
          onClick={() => setRatingClick(2)}
        >
          <use href="#star" />
        </svg>
        <svg
          width="24"
          height="24"
          fill={`${
            rating > 2 || ratingClick > 2
              ? "rgba(249, 173, 61, 1)"
              : " rgba(249, 174, 61, 0.307)"
          }`}
          onMouseEnter={(e) => {
            setRating(3);
          }}
          onMouseLeave={() => setRating(0)}
          onClick={() => setRatingClick(3)}
        >
          <use href="#star" />
        </svg>
        <svg
          width="24"
          height="24"
          fill={`${
            rating > 3 || ratingClick > 3
              ? "rgba(249, 173, 61, 1)"
              : " rgba(249, 174, 61, 0.307)"
          }`}
          onMouseEnter={(e) => {
            setRating(4);
          }}
          onMouseLeave={() => setRating(0)}
          onClick={() => setRatingClick(4)}
        >
          <use href="#star" />
        </svg>
        <svg
          width="24"
          height="24"
          fill={`${
            rating === 5 || ratingClick === 5
              ? "rgba(249, 173, 61, 1)"
              : " rgba(249, 174, 61, 0.307)"
          }`}
          onMouseEnter={(e) => {
            setRating(5);
          }}
          onMouseLeave={() => setRating(0)}
          onClick={() => setRatingClick(5)}
        >
          <use href="#star" />
        </svg>
      </div>
    </div>
  );
};

export default Rating;
