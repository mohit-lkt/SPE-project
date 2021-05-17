import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import "../css/contact.css"
require('dotenv').config()
const baseurl = process.env.REACT_APP_BASE_URL;
function Contact() {
    var gapi = window.gapi
    var CLIENT_ID = "171097520847-fmhhis48uhg6p52c2q7tp25mob9a8m0t.apps.googleusercontent.com"
    var API_KEY = "AIzaSyBAArOYATeu6YrCNDNok8_NyFnHxq2O-GM"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar" 
    
    const [summary,setSummary] = useState("");
    const [location,setLocation] = useState("");
    const [description,setDescription] = useState("");
    const [startDate,setStartDate] = useState("");
    const [startTime,setStartTime] = useState("");
    const [endDate,setEndDate] = useState("");
    const [endTime,setEndTime] = useState("");

    const [summaryR,setSummaryR] = useState("");
    const [locationR,setLocationR] = useState("");
    const [descriptionR,setDescriptionR] = useState("");
    const [startDateR,setStartDateR] = useState("");
    const [startTimeR,setStartTimeR] = useState("");
    const [endDateR,setEndDateR] = useState("");
    const [endTimeR,setEndTimeR] = useState("");
    const [error,setError] = useState("");
    const history = useHistory()
    

    const onEventCreate = (e)=>{
        e.preventDefault()
        const data = {summary,location,description,startDate,startTime,endDate,endTime}
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
            body: JSON.stringify(data)
          };
          fetch( baseurl + '/event', requestOptions)
          .then(response => {
            console.log(response.body);
            if(response.status !== 200 ) {
                return response.json().then((body) => {
                    // throw new Error(body.error)
                    console.log('red',body);
                    setError(body.msg)

                    
                  })
            }else{
              window.alert("Created Event");
          }

            history.push("/")

            return response.json()

          })
          .then(data => {
            console.log(data)});

        
    }
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
              'summary': 'Yoga',
              'location': 'Bangalore',
              'description': 'Get Healthy',
              'start': {
                'dateTime': '2021-05-17T09:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
              },
              'end': {
                'dateTime': '2021-05-18T17:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
              },
              'recurrence': [
                'RRULE:FREQ=DAILY;COUNT=1'
              ],
              'attendees': [
                {'email': 'ashish@example.com'},
                {'email': 'mohit@example.com'}
              ],
              'reminders': {
                'useDefault': false,
                'overrides': [
                  {'method': 'email', 'minutes': 24 * 60},
                  {'method': 'popup', 'minutes': 10}
                ]
              }
            }
            // event.summary = summaryR;
            // event.location = locationR;
            // event.description = descriptionR;
            event.start.dateTime = "2021-05-17T09:00:00-07:00";
            event.end.dateTime = "2021-05-18T17:00:00-07:00";
            //event.start.dateTime = startDateR+"T"+startTimeR+"-07:00";
            // console.log(summaryR);
            // console.log(locationR);
            // console.log(descriptionR);
            // console.log(startDateR);
            // console.log(startTimeR);
            // console.log(endDateR);
            // console.log(endTimeR);
            // if(summaryR && locationR && descriptionR && startDateR && startTimeR && endDateR && endTimeR){
            // event.summary = summaryR;
            // event.location = locationR;
            // event.description = descriptionR;
            
            // event.start.dateTime = startDateR+"T"+startTimeR+"-07:00";
            // console.log(event.start.dateTime);
            // event.end.dateTime = endDateR+"T"+endTimeR+"-07:00";
            // }
            
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
        <h2>Events</h2>
        
       </div>
       
       <div className="container">
           
           <div className ="contactForm">
               <form>
                   <h2>Create Event</h2>
                   <div className="inputBox">
                        <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setSummary(e.target.value)}}/>
                        <span>Summary</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setLocation(e.target.value)}}/>
                     <span>Location</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setDescription(e.target.value)}}/>
                     <span>Description</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setStartDate(e.target.value)}}/>
                     <span>Start Date(yyyy-mm-dd)</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setStartTime(e.target.value)}}/>
                     <span>Start Time(hh:mm:ss)</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setEndDate(e.target.value)}}/>
                     <span>End Date(yyyy-mm-dd)</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setEndTime(e.target.value)}}/>
                     <span>End Time(hh:mm:ss)</span>
                   </div>
                   <div className="inputBox">
                    <input type="submit" name="" value="Create" onClick = {onEventCreate}/>
                    
                   </div>
                   
               </form>
           </div>  
        </div>
        <div className="container">
           
           <div className ="contactForm">
               <form>
                   <h2>Register in Events</h2>
                   <div className="inputBox">
                        <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setSummaryR(e.target.value)}}/>
                        <span>Summary</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setLocationR(e.target.value)}}/>
                     <span>Location</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setDescriptionR(e.target.value)}}/>
                     <span>Description</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setStartDateR(e.target.value)}}/>
                     <span>Start Date(yyyy-mm-dd)</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setStartTimeR(e.target.value)}}/>
                     <span>Start Time(hh:mm:ss)</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setEndDateR(e.target.value)}}/>
                     <span>End Date(yyyy-mm-dd)</span>
                   </div>
                   <div className="inputBox">
                    <input type="text" name="" required="required" onChange={(e)=> {
                    setError('')
                    setEndTimeR(e.target.value)}}/>
                     <span>End Time(hh:mm:ss)</span>
                   </div>
                   <div className="inputBox">
                    <input type="submit" name="" value="Register" onClick = {handleClick}/>
                   </div>
                   
               </form>
           </div>  
        </div>

   </section>


        </>
    )

}

export default Contact ;