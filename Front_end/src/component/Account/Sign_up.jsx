import React, { Component } from 'react';
import '../../assets/css/Sign_up.css';

class Sign_up extends Component {
    render() {
        return (
          <div className="sign-up">
          <div className="group-parent18">
            <div className="group-parent19">
              <div className="group-parent19">
                <div className="group-child22" />
                <b className="welcome-back">Welcome Back!</b>
                <div className="to-keep-connected-with-us-plea-parent">
                  <b className="to-keep-connected">
                    To keep connected with us please login
                  </b>
                  <b className="with-your-personal">with your personal info</b>
                </div>
              </div>
              <div className="rectangle-parent13">
                <div className="group-child23" />
                <b className="sign-in">SIGN IN</b>
              </div>
            </div>
            <div className="group-parent20">
              <form>
              <div className="group-parent21">
                <div className="group-parent22">
                  <div className="group-parent21">
                    <div className="group-parent21">
                      <div className="group-child24" />
                      <b className="create-account">Create Account</b>
                    </div>
                    <img className="ellipse-icon" alt="" src="/ellipse-8.svg" />
                    <img className="group-icon" alt="" src="/group-37.svg" />
                    <img className="group-child29" alt="" src="/group-28.svg" />
                  </div>
                  <div className="or-use-your">
                    or use your email for registration
                  </div>
                </div>
                
                <div className="rectangle-parent16">
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
                </div>
                <div className="rectangle-parent15">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your password" />
                </div>
                <div className="rectangle-parent17">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                </div>
                
                <div className="group-wrapper2">
                 
                    
                    <button type="submit" className=" sign_in btn btn-primary">Sign up</button>
                   
                    
                 
                </div>
              </div>
             
              </form>
            </div>
          </div>
        </div>
        );
    }
}

export default Sign_up;