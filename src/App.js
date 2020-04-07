import React from 'react';
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>;
}

Food.propTypes ={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image: "http://geumchi.com/product/%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98/20/",
    rating: "3.5"
  },
  {
    id:2,
    name: "pizza",
    image: "http://blog.daum.net/_blog/photoImage.do?blogid=0AAWa&imgurl=http://cfile209.uf.daum.net/original/99D1E74F5D470A32191F43",
    rating: 4.9
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />) }
    </div>
  );
}

export default App;
