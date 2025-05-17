import React, { useState,useEffect} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

const ProductEdit = () => {
    const loc=useLocation()
    const navigate=useNavigate()
    const[data,setData]=useState({
        id: loc.state.id,
        name: loc.state.name,
        description: loc.state.description,
        subcategory_id: loc.state.subcategory_id,
        ram: loc.state.ram,
        price: loc.state.price,
        quantity: loc.state.quantity,
    })

    const handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    function handlesubmit(e){
        e.preventDefault();
    axios.put('http://127.0.0.1:8000/product/productedit/' + loc.state.id + '/', data)
    .then(function (response) {
      console.log(response)
      navigate('/adminhome');
    })
    }


  return (
    <div className="main">
            <div className="form-container">
                <h2>ADD PRODUCT</h2>
                <div className="form-container-inner">
                    <form>
                        <label><b>Name</b></label>
                        <input type="text" placeholder="Enter Name in uppercase" name='name' defaultValue={loc.state.name} required onChange={handlechange} />
                        
                        <label><b>Description</b></label>
                        <input type="text" placeholder="Enter Description" name='description' defaultValue={loc.state.description} required onChange={handlechange}/>
                        
                        <label><b>Subcategory ID</b></label>
                        <input type="text" placeholder="Enter Subcategory ID" name='subcategory_id' defaultValue={loc.state.subcategory_id} readOnly onChange={handlechange}/>
                        
                        

                        <label><b>Ram</b></label>
                        <input type="text" placeholder="Enter ram" name='ram' defaultValue={loc.state.ram} required onChange={handlechange}/>

                        <label><b>Price</b></label>
                        <input type="text" placeholder="Enter price" name='price' defaultValue={loc.state.price} required onChange={handlechange}/>

                        <label><b>Quantity</b></label>
                        <input type="text" placeholder="Enter quantity" name='quantity' defaultValue={loc.state.quantity} required onChange={handlechange}/>
                        
                        <button type="submit" onClick={handlesubmit}>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ProductEdit