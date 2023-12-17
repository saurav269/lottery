

import React, { useState } from 'react'
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import './login.css';
  
  const ForgotPass = () => {
    const [email, setEmail] = useState("")
    const [newpassword, setNewPassword] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate()

    //Form Functionality
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post("https://pear-worried-bonobo.cyclic.app/api/v1/auth/forgot-password", 
            {email,
             newpassword,
             answer,
            }
            );
            if(res && res.data.success){
                // toast.success(res.data && res.data.message)
                alert('Password Reset Successfully..🤩')
               //redirecting to login
                navigate('/login')
            }else{
                // toast.error(res.data.message)
                alert("Wrong Password")
            }
        }catch(err){
            console.log(err)
            // toast.error('User Not Registered')
            alert("Wrong Password")
        }
    }

    return (
       
            <div className="lgform-container">
          <form onSubmit={handleSubmit}>
          <h3 className='title'>Reset Password</h3>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder='Email'
                required 
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                placeholder='Enter your favourite book name'
                required 
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
                placeholder='Enter New Password'
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Reset
            </button>
          </form>
        </div>
    )
  }
  
  export default ForgotPass
  