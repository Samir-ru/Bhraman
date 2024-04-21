import { useState, useEffect} from "react";
import axios from "axios";

function Rating({ isOpen, onClose, title}) {
  const arr = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(null);

  const handleRating = (value) => {
    setRating(value);
    console.log(value);
  };

  const handleSubmit = () => {
    if (rating !== null) {
      axios.post("http://localhost:3000/rating", { title, rating })
        .then((response) => {
          console.log("Rating submitted successfully:", response.data);
          onClose();
        })
        .catch((error) => {
          console.error("Error submitting rating:", error);
        });
    }
  };

  return (
    <>
      {isOpen && (
        <div className="popBox">
          <h1>Give your rating of this place</h1>
          <p>{rating}</p>
          <div className="btns">
            {arr.map((number) => (
              <button
                key={number}
                onClick={() => handleRating(number)}
                className="rateBtn"
              >
                {number}
              </button>
            ))}
          </div>
          <div className="botBtn">
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      )}
      {isOpen && <div className="blur"></div>}
    </>
  );
}

export default Rating;
