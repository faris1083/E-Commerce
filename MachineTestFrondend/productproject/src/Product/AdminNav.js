import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductForm.css';

const AdminNav = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    
      const toggleDropdown = () => setShowDropdown(prev => !prev);
  return (
    <div>
        <nav className="navbar">
        <div className="navbar-brand">Product Manager</div>
        <div className="navbar-links">
          
          <div
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <span className="dropdown-toggle">Categories</span>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/categoriesview">View Categories</Link>
                <Link to="/categoriesadd">Add Category</Link>
              </div>
            )}</div>
          <Link to="/addproduct">Add Product</Link>
          <Link to="/productview">Edit Products</Link>
          
          
        </div>
      </nav>
    </div>
  )
}

export default AdminNav