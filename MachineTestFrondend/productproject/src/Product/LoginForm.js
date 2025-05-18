import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const LoginForm = () => {
    const navigate=useNavigate()
    const [formdata,Setformdata]=useState({username:'',password:''})

    const handlechange=(e)=>{
      Setformdata({...formdata,[e.target.name]:e.target.value})
    }


    function handlesubmit(e){
        e.preventDefault();
      let a1=formdata.username
      let a2=formdata.password

      console.log(a1)
      console.log(a2)

      axios.get(`http://127.0.0.1:8000/product/login1/?username=${a1}&password=${a2}`)
      .then(function(response){

        if(!response.data[0]){
          alert('invalid username or password')
          navigate('/')
        }
        else if(response.data[0].category==='customer'){
          sessionStorage.setItem("cid",response.data[0].username);
          sessionStorage.setItem("cusid",response.data[0].cusid)
          navigate('/cushome');
        }
        
        else if(response.data[0].category==='admin'){
          sessionStorage.setItem("aid",response.data[0].username);
          navigate('/adminhome')
        }
        else{
          alert('login error')
          navigate('/login')
        }
      }

      )
    }
  return (
    <div className="main">
            <div className="form-container">
                <h2>LOGIN</h2>
                <div className="form-container-inner">
                    <form>
                        <label><b>UserName</b></label>
                        <input type="text" placeholder="Enter Name in uppercase" name='username' value={formdata.username} required onChange={handlechange} />
                        
                        <label><b>Password</b></label>
                        <input type="text" placeholder="Enter Description" name='password' value={formdata.password}  required onChange={handlechange}/>
                        
                        
                        <button type="submit" onClick={handlesubmit}>SUBMIT</button>
                    </form>
                </div>
                <div className="signup-link">
            <p>Don't have an account? <Link to="/register">Create an account</Link></p>
            </div>
            </div>
        </div>
  )
}

export default LoginForm