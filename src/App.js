import React from 'react';

function Food({name, picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>;
}

const foodILike = [
  {
    name: "kimchi",
    image: "http://geumchi.com/product/%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98/20/"
  },
  {
    name: "pizza",
    image: "http://blog.daum.net/_blog/photoImage.do?blogid=0AAWa&imgurl=http://cfile209.uf.daum.net/original/99D1E74F5D470A32191F43"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />) }
    </div>
  );
}

export default App;
