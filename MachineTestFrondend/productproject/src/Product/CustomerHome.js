import React from 'react'
import { Link } from 'react-router-dom';
import './ProductForm.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const CustomerHome = () => {

    const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

  return (
    <div>
        <div>
        <nav className="navbar">
        <div className="navbar-brand">Product </div>
        <div className="navbar-links">
          <Link to="/viewcustomercategorie">Categorie</Link>
          <Link to="/wishlist">Wishlist</Link>
          
          
        </div>
      </nav>
      <div style={{width:'1300px',marginLeft:'150px',marginTop:'40px'}}>
      <Slider {...settings}>
              <div>
                <img src={require('../img/images1.jpeg')}  className="slider-img" style={{ width: '100%', height: '600px', objectFit: 'cover' }}/>
              </div>
              <div>
                <img src={require('../img/image2.jpeg')}  className="slider-img" style={{ width: '100%', height: '600px', objectFit: 'cover' }}/>
              </div>
              <div>
                <img src={require('../img/image3.jpeg')}  className="slider-img" style={{ width: '100%', height: '600px', objectFit: 'cover' }}/>
              </div>
            </Slider></div>
    </div>
    </div>
  )
}

export default CustomerHome