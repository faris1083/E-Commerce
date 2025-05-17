import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const CategorieAdd = () => {
    const nav=useNavigate()
    const[categorie,setCategorie]=useState({name:''})

    const handlechange=(e)=>{
        setCategorie({...categorie,[e.target.name]:e.target.value})
    }

    function handlesubmit(e){
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/product/category/',categorie)
        .then(function(response){
          
        nav('/adminhome') 
        })
  }
  return (
    <div>
        <div className="main">
            <div className="form-container">
                <h2>ADD CATEGORIES</h2>
                <div className="form-container-inner">
                    <form>
                        <label><b>Name</b></label>
                        <input type="text" placeholder="Enter Name " name='name' value={categorie.name} required onChange={handlechange} />
                        
                        <button type="submit" onClick={handlesubmit}>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategorieAdd