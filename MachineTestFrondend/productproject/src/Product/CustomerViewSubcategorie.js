import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card ,Pagination} from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Flex } from 'antd';
import CustomerNav from "./CustomerNav";

const { Meta } = Card;

const CustomerViewSubcategorie = () => {
    const nav=useNavigate()
    const loc=useLocation()
    const[sub,setSub]=useState([])

    const cid=loc.state.value
    console.log(cid)
    useEffect(() => {
    if (cid) {
      axios.get('http://127.0.0.1:8000/product/subcateviewbyid/' + cid + '/')
      
        .then(response => setSub(response.data.subcategory))
        .catch(error => console.error("Error fetching food:", error));
    }
  }, [cid]);


  function handlesubmit(id){
    nav('/cusproductview',{state:{value:id}})
  }
  return (
    <div>
        <CustomerNav/>
            <h1>SubCategories</h1>
            <div style={{display:'flex',justifyContent:'flex-start',gap:'10px',marginTop:'50px'}}>
                
            {sub.map((data) => (
                    <Card
                        hoverable
                        key={data.id}
                        style={{
                            width: 300,
                            borderRadius: "15px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            transition: "transform 0.3s ease-in-out",
                        }}
                        onClick={()=>handlesubmit(data.id)}
                    >
    
                        <Meta
                              title={<div style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>{data.name}</div>}
                            description={
                                <div style={{ textAlign: "center", fontSize: "14px", marginTop: "10px" }}>
                                    {/* <p><b> Name:</b> </p> */}
                                    
                                </div>
                            }
                        />
    
                    </Card>
                ))}
    
    
                
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        
        </div>
  )
}

export default CustomerViewSubcategorie