import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductForm.css';

const Mainpage = () => {
    const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const navigate=useNavigate()

  useEffect(() => {

        let session = sessionStorage.getItem("aid")

        if (session == null) {
            navigate('/')
        }

    }, []);

  return (
   <>
      <nav className="navbar">
        <div className="navbar-brand">Product Manager</div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
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

      <div className="home-content">
        <div className="welcome-card">
          <h1>Welcome to Product Manager</h1>
          <p>Manage your categories, products, and variants with ease.</p>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
