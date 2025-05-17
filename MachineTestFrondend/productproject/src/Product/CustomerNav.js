import React from 'react'
import { Link } from 'react-router-dom';
import './ProductForm.css';

const CustomerNav = () => {
  return (
    <div>
        <nav className="navbar">
        <div className="navbar-brand">Product </div>
        <div className="navbar-links">
          <Link to="/viewcustomercategorie">Categorie</Link>
          <Link to="/wishlist">Wishlist</Link>
          
          
        </div>
      </nav>
    </div>
  )
}

export default CustomerNav