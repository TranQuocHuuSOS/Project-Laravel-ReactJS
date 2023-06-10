import React, { Component, useState } from 'react';
import './Sign_in.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
const Sign_in =() =>{
    const[email, setEmail]=useState("");
    const[password, setPassword]= useState("");
    const navigate =useNavigate();
    const handleLogin = async(event)=>{
      event.preventDefault();
      try{
        await axios.post('/login', {email, password});
        setEmail("")
        setPassword("")
        navigate("/");
      }
      catch(e){
        console.log(e);
      }
    }
        return (
            <div className="sign-in1">
            <div className="group-parent25">
              <div className="group-parent26">
                <div className="rectangle-parent18">
                  <div className="group-child30" />
                  <b className="hello-friend">Hello, Friend!</b>
                  <div className="enter-your-personal-details-an-parent">
                    <b className="enter-your-personal">{`Enter your personal details and   `}</b>
                    <b className="journey-with-us">journey with us</b>
                  </div>
                </div>
                <div className="rectangle-parent19">
                  <div className="group-child31" />
                  <b className="sign-up2">SIGN UP</b>
                </div>
              </div>
              <div className="group-parent27">
                <form  onSubmit={handleLogin}>
                <div className="group-parent28">
                  <div className="group-parent29">
                    <div className="group-parent28">
                      <div className="group-parent28">
                        <div className="group-child32" />
                        <b className="sign-in2">Sign in</b>
                      
                        <img
                          className="icon-google-circled"
                          alt=""
                          src="/-icon-google-circled.svg"
                        />
                      </div>
                      <img className="group-child33" alt="" src="/ellipse-8.svg" />
                      <img className="group-child34" alt="" src="/ellipse-81.svg" />
                      <img className="group-child38" alt="" src="/group-281.svg" />
                    </div>
                    <div className="or-use-your1">or use your account</div>
                  </div>
                  <div className="rectangle-parent22">
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                    </div>
                  <div className="rectangle-parent21">
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"  placeholder=" Enter your password" />
                  </div>
                  <Link to="Forgot_password" className="forgot-your-password">Forgot your password?</Link>
                  <Link to="/Sign_up" className="register">Register?</Link>
                  <div className="group-wrapper3">
                    
                      
                      <button type="submit" className=" sign_in btn btn-primary">Sign in</button>
                    
                  </div>
                </div>
                
                </form>
              </div>
             
            </div>
          </div>
        );
    }


export default Sign_in;