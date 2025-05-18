import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {  Space, Button, message } from 'antd';
import CustomerNav from './CustomerNav';
import { Card, Carousel } from "antd";
import { useNavigate } from 'react-router-dom';

 
const { Meta } = Card;

const CustomerWishlist = () => {
    const[product,setProduct]=useState([])
    const navigate=useNavigate()

     useEffect(() => {  
       let session = sessionStorage.getItem("cid")
      
          if (session == null) {
              navigate('/')
          }



        axios.get('http://127.0.0.1:8000/product/wishlistget/')
            .then(response => setProduct(response.data))
    }, []);
  return (
    <div>
        <CustomerNav/>
        
        <div style={{ padding: "50px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
              {product.map((data) => (
                <Card
                  hoverable
                  key={data.id}
                  style={{
                    width: 300,
                    borderRadius: "15px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  
                  <Carousel autoplay dots={{ className: "custom-dots" }}>
                    <div>
                      <img src={`http://127.0.0.1:8000${data.image}`} alt="Food" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
                    </div>
                  </Carousel>
      
                  
                  <Meta
                    title={<div style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>{data.name}</div>}
                    description={
                      <div style={{ textAlign: "center", fontSize: "14px", marginTop: "10px" }}>
                        <p><b>Subcategory:</b> {data.subcategory_id}</p>
                        <p><b>Description:</b> {data.description}</p>
                        <p><b>Ram:</b> {data.ram}</p>
                        <p><b>Price:</b> ₹{data.price}</p>
                        <p><b>Quantity:</b> ₹{data.quantity}</p>
                        <p style={{ fontStyle: "italic", color: "#555" }}>{data.description}</p>
                        
                        
                      </div>
                    }
                  />
                </Card>
              ))}
            </div>
            
            </div>
  )
}

export default CustomerWishlist