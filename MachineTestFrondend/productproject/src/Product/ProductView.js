import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Table, Space, Button, message } from 'antd';
const ProductView = () => {
    const nav=useNavigate()
    const[product,setProduct]=useState([])

    useEffect(() => {  
        axios.get('http://127.0.0.1:8000/product/productview/')
            .then(response => setProduct(response.data))
    }, []);

    function edit(up){
        axios.get("http://127.0.0.1:8000/product/productviewget/"+up).then(function(response){
            nav('/productedit',{state:response.data})
    });
    }
  return (
    <div>
        <Table dataSource={product} rowKey="id" bordered>
      <Table.Column title="ID" dataIndex="id" key="id" />
      <Table.Column title="Name" dataIndex="name" key="name" />
      <Table.Column title="Description" dataIndex="description" key="description" />
      <Table.Column title="subcategory_id" dataIndex="subcategory_id" key="subcategory_id"/>
      <Table.Column title="ram" dataIndex="ram" key="ram"/>
      <Table.Column title="Price" dataIndex="price" key="price" />
      <Table.Column title="Quantity" dataIndex="quantity" key="quantity" />
      
      <Table.Column
          title="Action"
          key="action"
          render={(_, data) => (
            <Space size="middle">
              <Button type="primary" onClick={() => edit(data.id)}>
                Edit
              </Button>
            </Space>
          )}
        />
    </Table>
    </div>
  )
}

export default ProductView