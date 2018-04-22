import React from 'react';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

const Home = () => (
  <div>
    <h1>Welcome in app Countries.js!</h1>
	
	<div className="img-container">
	  <img src={img1} />
	  <img src={img2} />
	  <img src={img3} />
	  <img src={img4} />
	</div>
  </div>
);

export default Home;