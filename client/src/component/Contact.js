import React from 'react'
// import { NavLink ,useHistory} from 'react-router-dom'
import "../css/contact.css"
function Contact() {
    var gapi = window.gapi
    var CLIENT_ID = "171097520847-fmhhis48uhg6p52c2q7tp25mob9a8m0t.apps.googleusercontent.com"
    var API_KEY = "AIzaSyBAArOYATeu6YrCNDNok8_NyFnHxq2O-GM"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar" 
    const handleClick = () => {
        gapi.load('client:auth2', () => {
          console.log('loaded client')
    
          gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          })
    
          gapi.client.load('calendar', 'v3', () => console.log('bam!'))
    
          gapi.auth2.getAuthInstance().signIn()
          .then(() => {
            
            var event = {
              'summary': 'Awesome Event!',
              'location': '800 Howard St., San Francisco, CA 94103',
              'description': 'Really great refreshments',
              'start': {
                'dateTime': '2021-05-14T09:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
              },
              'end': {
                'dateTime': '2021-05-15T17:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
              },
              'recurrence': [
                'RRULE:FREQ=DAILY;COUNT=2'
              ],
              'attendees': [
                {'email': 'lpage@example.com'},
                {'email': 'sbrin@example.com'}
              ],
              'reminders': {
                'useDefault': false,
                'overrides': [
                  {'method': 'email', 'minutes': 24 * 60},
                  {'method': 'popup', 'minutes': 10}
                ]
              }
            }
    
            var request = gapi.client.calendar.events.insert({
              'calendarId': 'primary',
              'resource': event,
            })
    
            request.execute(event => {
              console.log(event)
              window.open(event.htmlLink)
            })
            
        
    
          })
        })
      }

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
                   <div>
                   <button style={{width: 100, height: 50}} onClick={handleClick}>Add Event</button>
                   </div>
               </form>
           </div>  
        </div>

   </section>


        </>
    )

}

export default Contact ;