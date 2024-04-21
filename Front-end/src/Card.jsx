import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import star from './assets/star.png';
import { cardContext } from './App';

function Card({ search }) {
  const [cards, setCards] = useState([]);
  const [oneData, setOneData] = useContext(cardContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/content');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

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

  const filteredCards = search
    ? cards.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    : cards;

  return (
    <div className="card">
      {filteredCards.map((item, index) => (
        <div key={index} className="card-item">
          <img src={`data:image/jpeg;base64, ${item.imageData}`} alt={item.title} className="card-image" />
          <div className="card-details">
            <h2 className="card-title">{item.title}</h2>
            <div className="card-rating">{renderStars(item.numerator, item.denominator)}</div>
            <div className="reviewCon">
              <div className="card-reviews">{item.reviews} reviews</div>
              <Link to={{ pathname: `/detailed/${index}` }} className='book' onClick={() => setOneData(item)}>Book Now</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
