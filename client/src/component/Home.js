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
                <React.Fragment>
                <div className="welcome-text">
                    <h1>
                        Let's <span>Fuel Up</span> !</h1>
                    <a href="/Contact">Create Event</a>
                </div>

                
                </React.Fragment>
            </header>
        </>
    )
}
export default withRouter(Home)


