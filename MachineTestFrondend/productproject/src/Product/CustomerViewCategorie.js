import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Card ,Pagination} from "antd";
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Flex } from 'antd';
import CustomerNav from './CustomerNav';
const { Meta } = Card;

const CustomerViewCategorie = () => {
    const nav=useNavigate()
    const [val, setval] = useState([])
    
    

    useEffect(() => {  
        axios.get('http://127.0.0.1:8000/product/categoryview/')
            .then(response =>setval(response.data))
    }, []);
    console.log(val)
    function handlesubmit(id){
        nav('/cussubcategoriesview',{state:{value:id}})
    }
  return (
    <div>
        <CustomerNav/>
            <div style={{display:'flex',justifyContent:'flex-start',gap:'10px',marginTop:'50px'}}>
            {val.map((data) => (
                    <Card
                        hoverable
                        key={data.id}
                        style={{
                            width: 300,
                            borderRadius: "15px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            transition: "transform 0.3s ease-in-out",
                        }}
                    >
    
                        <Meta
                              title={<div style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>Categorie</div>}
                            description={
                                <div style={{ textAlign: "center", fontSize: "14px", marginTop: "10px" }}>
                                    <p><b> Name:</b> {data.name}</p>
                                    
                                    
                                </div>
                            }
                        />
    
                        <Button type="primary" danger style={{ marginTop: "10px", width: "100%" }} onClick={()=>handlesubmit(data.id)}>
                      View SubCategories
                      </Button>
                    </Card>
                ))}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* <Pagination defaultCurrent={1} total={6} />; */}
        </div>
  )
}

export default CustomerViewCategorie