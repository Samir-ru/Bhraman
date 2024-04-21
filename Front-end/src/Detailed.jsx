import { useState, useContext } from "react";
import { cardContext } from "./App";
import star from "./assets/star.png";
import image1 from "./assets/image1.JPG";
import Rating from "./Rating";

function Detailed() {
  const [oneData, setOneData] = useContext(cardContext);
  const [vehicle, setVehicle] = useState("");
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      vehicle,
      date,
      from,
      title: oneData.title,
    };
    try {
      console.log(formData);
      const response = await fetch('http://localhost:3000/bookings', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              });
              if (response.ok) {
                console.log('Booking successful!');
              } else {
                console.error('Booking failed.');
              }
            } catch (error) {
              console.error('Error:', error);
            }
  };

  const toggleRatingModal = () => {
    setIsRatingOpen(!isRatingOpen);
  };

  const renderStars = (numerator, denominator) => {
    if (denominator === 0) {
      return <p>No rating till now</p>;
    }
    
    const averageRating = Math.floor(numerator / denominator);
    const stars = [];
    for (let i = 0; i < averageRating; i++) {
      stars.push(<img key={i} src={star} alt="star" className="star" />);
    }
    return stars;
  };
  

  return (
    <>
      <div className="box">
        <img
          src={`data:image/jpeg;base64, ${oneData.imageData}`}
          alt=""
          className="bigView"
        />
        <div className="configure">
          <p className="title">{oneData.title}</p>
          <div className="card-rating">{renderStars(oneData.numerator, oneData.denominator)}</div>
          <p className="des">{oneData.description}</p>
          <form onSubmit={handleSubmit} className="form">
            <select
              name="vehicle"
              onChange={(e) => setVehicle(e.target.value)}
              value={vehicle}
              className="inputs"
            >
              <option value="" disabled>
                Choose a Vehicle
              </option>
              <option value="Tata-Sumo">Tata-Sumo</option>
              <option value="Mahindra-Bolero">Mahindra-Bolero</option>
              <option value="Mahindra-Scorpio">Mahindra-Scorpio</option>
              <option value="Tata-Winger">Tata-Winger</option>
              <option value="Toyota-Landcruiser">Toyota-Landcruiser</option>
              <option value="Toyota-Hillux">Toyota-Hillux</option>
            </select>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="inputs"
            />
            <input
              type="text"
              name="from"
              value={from}
              placeholder="From?"
              onChange={(e) => setFrom(e.target.value)}
              className="inputs"
            />
            <input type="submit" value="Book" className="inputs book" />
          </form>
          <button className="rate" onClick={toggleRatingModal}>
            Rate
          </button>
        </div>
      </div>
      <Rating isOpen={isRatingOpen} onClose={toggleRatingModal} title={oneData.title}/>
    </>
  );
}

export default Detailed;
