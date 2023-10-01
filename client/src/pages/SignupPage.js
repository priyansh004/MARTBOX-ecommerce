import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import toast from "react-hot-toast";

const SignupPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretkey, setSecretKey] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
     const res = await axios.post(`http://localhost:4000/api/v1/auth/signup`, 
     
      {
        name,
        email,
        password,
        secretkey
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      }
      
      );
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      if (res && res.data.success) {
        toast.success(res.data && res.data.message, { duration: 4000 });
      } else {
        toast.error(res.data.message, { duration: 4000 });
      }
    }
    catch(err){
      console.log(err);
      toast.error("Something went wrong");
    }
    
  }


  return (
    <>
      <div className="container">
        <h1>Signup Page</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="name">
            <label htmlFor="name">Name</label>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                required
                label="name"
                variant="outlined"
              />
            </div>
            <div className="email">
            <label htmlFor="email">email</label>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                required
                label="email"
                variant="outlined"
              />
            </div>
            <div className="email">
            <label htmlFor="password">password</label>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                required
                label="password"
                variant="outlined"
              />
            </div> 
            <div className="email">
            <label htmlFor="secretkey">secretkey</label>
              <TextField
                value={secretkey}
                onChange={(e) => setSecretKey(e.target.value)}
                type="text"
                id="secretkey"
                required
                label="secretkey"
                variant="outlined"
              />
            </div>
            <button type="submit">click</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
