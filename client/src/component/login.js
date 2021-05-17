
import React, { useState } from 'react'
import { NavLink,useHistory } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { saveToken } from './../redux/home'
import "../css/signup.css";
require('dotenv').config()
const baseurl = process.env.REACT_APP_BASE_URL;
console.log(baseurl);
function Login() {
    const [username,setuserName] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const history = useHistory()
    const dispatch = useDispatch()

    const onLogin = (e)=>{
        e.preventDefault()
        const data = {username,password}
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
            body: JSON.stringify(data)
          };
          fetch( baseurl + '/auth/login', requestOptions)
          .then(response => {
            console.log(response.body);
            if(response.status !== 200 ) {
                return response.json().then((body) => {
                    // throw new Error(body.error)
                    console.log('red',body);
                    setError(body.msg)
                  })
            }else{
                window.alert("Loggen In");
            }

            history.push("/")

            return response.json()

          })
          .then(data => {
            sessionStorage.setItem('token', JSON.stringify({
                token: data.token
            }))  
            const token = data.token
            dispatch(saveToken(token))
            console.log(data)});

        
    }

    return (
        <>
        
       <div className="login-form">
       
    <form action="/examples/actions/confirmation.php" method="post">
        <h2 className="text-center">Log in</h2>   
        <div style={{ color: 'red'}} className='text-center mb-2'>
            {error}
        </div>
        <div className="form-group" >
        	<div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="fa fa-user"></span>
                    </span>                    
                </div>
                <input type="text" onChange={(e)=> {
                    setError('')
                    setuserName(e.target.value)}}
                     className="form-control" name="username" placeholder="Username" required="required"/>				
            </div>
        </div>
		<div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                    </span>                    
                </div>
                <input type="password" onChange={(e)=> {
                    setError('')
                    setPassword(e.target.value)}} className="form-control" name="password" placeholder="Password" required="required"/>				
            </div>
        </div>        
        <div className="form-group">
            <button type="submit" onClick ={onLogin} className="btn btn-primary login-btn btn-block">Log in</button>
        </div>
        <div className="clearfix">
            <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
            <NavLink to="#" className="float-right">Forgot Password?</NavLink>
        </div>
		{/* <div className="or-seperator"><i>or</i></div>
        <p className="text-center">Login with your social media account</p>
        <div className="text-center social-btn">
            <NavLink to="/" className="btn btn-secondary"><i className="fa fa-facebook"></i>&nbsp; Facebook</NavLink>
            <NavLink to="/" className="btn btn-info"><i className="fa fa-twitter"></i>&nbsp; Twitter</NavLink>
			<NavLink to="/" className="btn btn-danger"><i className="fa fa-google"></i>&nbsp; Google</NavLink>
        </div> */}
    </form>
    <p className="text-center text-muted small">Don't have an account? <NavLink to="/signup">Sign up here!</NavLink></p>
</div>

        </>
    )
}

export default Login