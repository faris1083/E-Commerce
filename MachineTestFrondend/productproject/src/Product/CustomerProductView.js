import React, { useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Table, Space, Button, message } from 'antd';
import { Card, Carousel } from "antd";
import CustomerNav from './CustomerNav';
import { Input } from 'antd';
const { Search } = Input;
const { Meta } = Card;


const CustomerProductView = () => {
    const nav=useNavigate()
    const loc=useLocation()
    const[product,setProduct]=useState([])
    const[search,setSearch]=useState(false)
    


    const pid=loc.state.value

    const custid=sessionStorage.getItem('cusid')

    useEffect(() => {  
       let session = sessionStorage.getItem("cid")
      
          if (session == null) {
              nav('/')
          }



        axios.get('http://127.0.0.1:8000/product/productviewbyid/'+pid+'/')
            .then(response => setProduct(response.data))
    }, []);

    

    const onSearch = (value) =>{
        axios.get('http://127.0.0.1:8000/product/search/'+value+'/')
            .then(response =>{
                setProduct(response.data)
                setSearch(true)
            }
        
        )
    }

    function handlesubmit(id){
        axios.post('http://127.0.0.1:8000/product/wishlist/'+custid+'/'+id+'/')
            .then(function(response){
                alert('created')
            })
        
    }
  
  return (
    <div>
        <CustomerNav/>
        <div style={{marginTop:'40px',marginLeft:'40px'}}>
            <Space direction="vertical">
                <Search placeholder="input search text" onSearch={onSearch}  style={{ width: 200 }} />
            </Space>
        </div>

        
            
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
                        <Button type="primary" danger style={{ marginTop: "10px", width: "100%" }} onClick={()=>handlesubmit(data.id)}>
                          ADD WISHLIST
                        </Button>
                        
                      </div>
                    }
                  />
                </Card>
              ))}
            </div>
        


        

              



    </div>
  )
}

export default CustomerProductView