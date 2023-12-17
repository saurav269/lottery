import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './register.css'
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate()

    //FORM FUNCTION
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post("https://pear-worried-bonobo.cyclic.app/api/v1/auth/register", 
            {name, email, password, phone, address,answer}
            );
            if(res && res.data.success){
                //  toast.success(res.data && res.data.message)
                navigate('/login')
                alert('User Register Successfully..🤩')
            }else{
                // toast.error(res.data.message)
                alert("Missing Something")
            }
        }catch(err){
            console.log(err)
            // toast.error('Something went Wrong')
        }
    }
  return (
      <div className="form-container"> 
        <form onSubmit={handleSubmit}>
        <h3 className='title'>Register Form</h3>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder='First Name'
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder='Email'
              required 
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder='Password'
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone"
              placeholder='Phone Number'
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress"
              placeholder='Address'
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputAddress"
              placeholder='What is your Favourite Movie name ?'
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

  );
}

export default Register
