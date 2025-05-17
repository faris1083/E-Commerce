import React, { useState } from 'react'
import './ProductForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const[user,setUser]=useState({})
    const navigate=useNavigate()

    const handlechange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    function handlesubmit(e){
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/product/registration/', user)
    .then(function (response) {
      if (response.data.message === 'error') {
        alert("Phone number already exists. Please use a different number.");
      } else {
        alert("Customer registered successfully!");
        navigate('/');
      }
    })
    }
  return (
    <div>
      
    <div className="main">
      
    <div className="form-container" >
    <h2>ADD FORM</h2>
    <div className="form-container-inner">
      <form>
        <label><b> Name</b></label>
        <input type="text" placeholder="Enter Name in uppercase"   name='cus_name' value={user.cus_name} required onChange={handlechange}/>
        <br />
        <label><b>phone Number</b></label>
        <input type="text" placeholder="Enter phoneNumber" name='cus_phone' value={user.cus_phone} required onChange={handlechange}/>
        <br />
        <label><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name='cus_email' value={user.cus_email} required onChange={handlechange}/>
        <br />
        <label><b>Address</b></label>
        <input type="text" placeholder="Enter Address" name='cus_address' value={user.cus_address} required onChange={handlechange}/>
        <br />
        <label><b>UserName</b></label>
        <input type="text" placeholder="Enter username" name='username' value={user.username} required onChange={handlechange}/>
        <br />
        <label><b>Password</b></label>
        <input type="text" placeholder="Enter password" name='password' value={user.password} required onChange={handlechange}/>
        <br />
        
       
        <br />
        <button type="submit" onClick={handlesubmit}>SUBMIT</button>
      </form>
    </div>
  </div></div>
    </div>
  )
}

export default Register