import React, { useState ,useEffect} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';

const SubCategoryAdd = () => {
    const nav=useNavigate()
    const[val,setVal]=useState({name:'',category_id:''})


    useEffect(() => {
        
                let session = sessionStorage.getItem("aid")
            
                if (session == null) {
                    nav('/')
                }
        
            }, []);

    const handlechange=(e)=>{
        setVal({...val,[e.target.name]:e.target.value})
    }
    function handlesubmit(e){
        e.preventDefault();
    axios.post('http://127.0.0.1:8000/product/subcategory/',val)
        .then(function(response){
          
        nav('/adminhome') 
        })
    }
  return (
    <div>
        <AdminNav/>
        <div className="main">
            <div className="form-container">
                <h2>ADD CATEGORIES</h2>
                <div className="form-container-inner">
                    <form>
                        <label><b>Name</b></label>
                        <input type="text" placeholder="Enter Name " name='name' value={val.name} required onChange={handlechange} />

                        <label><b>Categorie</b></label>
                        <input type="text" placeholder="" name='category_id' value={val.category_id} required onChange={handlechange} />
                        
                        <button type="submit" onClick={handlesubmit}>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubCategoryAdd