import React, { useState } from "react";
import { useDispatch } from 'react-redux' 
import { withRouter } from "react-router";

import "../css/home.css";
//import UserInfo from "./user-Info"


function Home(props) {

    
    
    // const [ userData, setShowUserInfo ] = useState(null)
    // const dispatch = useDispatch()

    


    return (

        <>
            <header>
                <div className="wrapper">
                    <div className="logo">
                        <img src="https://i.postimg.cc/mg4rWBmv/logo.png" alt="" />
                    </div>
                </div>
                
                <React.Fragment>
                <div className="welcome-text">
                    <h1>
                        We are <span>Creative</span></h1>
                    <a href="/Contact">Contact Us</a>
                </div>

                
                </React.Fragment>
            </header>
        </>
    )
}
export default withRouter(Home)


