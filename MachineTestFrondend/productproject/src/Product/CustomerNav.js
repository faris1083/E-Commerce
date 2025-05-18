import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './ProductForm.css';

const CustomerNav = () => {
  const navigate=useNavigate()

  useEffect(() => {
  
          let session = sessionStorage.getItem("cid")
      
          if (session == null) {
              navigate('/')
          }
  
      }, []);
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