import React from 'react'
// import { NavLink ,useHistory} from 'react-router-dom'
import "../css/contact.css"
function Contact() {


    return(
        <>
             <section className="contact">
       <div className="content">
        <h2>Contact Us</h2>
        <p>Our Mission is to empower millions of service professionals 
            by delivering services at-home in a way that has never been 
            experienced before.</p>
       </div>
       <div className="container">
           <div className="contactInfo">
               <div className="box">
                   <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                   <div className="text">
                       <h3>Address</h3>
                       
                       <p className= "info">26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100</p>
                   </div>
               </div>
               <div className="box">
                <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Email</h3>
                    <p className = "info">iiitb.ac.in</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Phone</h3>
                    <p className= "info"> 080-41407777</p>
                </div>
            </div>
           </div>
           <div className ="contactForm">
               <form>
                   <h2>Send Message</h2>
                   <div className="inputBox">
                        <input type="text" name="" required="required" />
                        <span>Full Name</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required"/>
                     <span>Email</span>
                   </div>
                   <div className="inputBox">
                    <textarea required="required"></textarea>
                     <span>Type your Message...</span>
                   </div>
                   <div className="inputBox">
                    <input type="submit" name="" value="Send"/>
                    
                   </div>
               </form>
           </div>  
        </div>

   </section>


        </>
    )

}

export default Contact ;