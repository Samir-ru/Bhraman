import { useState } from 'react'
import ImageOne from './assets/image1.JPG';
import star from './assets/star.png';

function Card() {
    const card = [
      {
        title: 'Kalinchowk',
        image: ImageOne,
        rating: 2,
        reviews: "3.2k"
      },
      {
        title: 'Kalinchowk',
        image: ImageOne,
        rating: 3,
        reviews: "3.2k"
      },
      {
        title: 'Kalinchowk',
        image: ImageOne,
        rating: 4,
        reviews: "3.2k"
      },
      {
        title: 'Kalinchowk',
        image: ImageOne,
        rating: 5,
        reviews: "3.2k"
      },
      {
        title: 'Kalinchowk',
        image: ImageOne,
        rating: 3,
        reviews: "3.2k"
      },
      {
        title: 'Kalinchowk',
        image: ImageOne,
        rating: 3,
        reviews: "3.2k"
      },
    ];
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
          stars.push(<img key={i} src={star} alt="star" className="star" />);
        }
        return stars;
      };
  
    return (
      <div className="card">
        {card.map((item, index) => (
          <div key={index} className="card-item">
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-details">
              <h2 className="card-title">{item.title}</h2>
              <div className="card-rating">{renderStars(item.rating)}</div>
              <div className="reviewCon">
              <div className="card-reviews">{item.reviews} reviews</div>
              <button className='book'>Book Now</button>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Card;
