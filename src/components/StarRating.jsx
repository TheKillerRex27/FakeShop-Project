import React from 'react';
import {useState} from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating() {
  const [rating, setRating] = useState(undefined)
  const [hover, setHover] = useState(null);

  return(
    <div>
      {[... Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={ratingValue}>
            <input
              style={{ display: 'none' }}
              type='radio'
              name='rating'
              value={rating}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={22}
              color={ratingValue <= (hover || rating) ? '#FFC107' : '#D3D4D8'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        )
      })}

      <p style={{fontSize:'12px'}}> Your rating is {rating} </p>
    </div>
  )
}

export default StarRating;
