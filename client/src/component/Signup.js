
import React , { useState } from 'react'
import { NavLink ,useHistory} from 'react-router-dom'
import "../css/signup.css";
require('dotenv').config()
const baseurl = process.env.REACT_APP_BASE_URL;
function Signup() {
        const [ username, setUname ] = useState('')
        const [ email, setemail ] = useState('')
        
        const [ password, setPass ] = useState('')
        const history = useHistory();


        const onRegister = (e) => {
                e.preventDefault()
                const data = { username,password, email  }
                const requestOptions = {
                  method: 'POST',
                  mode: 'cors',
                  headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   },
                  body: JSON.stringify(data)
                };
                fetch(baseurl+'/users', requestOptions)
                  .then(response => {
                    response.json()
                    if(response.status===201){
                        window.alert("Created Account");
                    }
                  console.log('res',response);
                  history.push("/")
                  })
                  .then(data => console.log(data));

                }





    return (
        <>
            <div className="signup-form">
                <form action="/examples/actions/confirmation.php" method="post" />
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <span className="fa fa-user"></span>
                            </span>
                        </div>
                        <input type="text" onChange={(e) => setUname(e.target.value)} className="form-control" name="username" placeholder="Username" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="email" onChange={(e) => setemail(e.target.value)} className="form-control" name="email" placeholder="Email Address" required="required" />
                    </div>
                </div>
                
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input type="text" onChange={(e) => setPass(e.target.value)} className="form-control" name="password" placeholder="Password" required="required" />
                    </div>
                </div>
                
                <div className="form-group">
                    <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>
                </div>
                <div className="form-group">
                    <button type="submit" onClick={ onRegister } className="btn btn-primary btn-lg">Sign Up</button>
                </div>

                <div className="text-center">Already have an account? <NavLink to="/login">Login here</NavLink></div>

            </div>

        </>
    )
}

export default Signup