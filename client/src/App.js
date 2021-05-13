import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux'
//import store from './store'
import './App.css'
import Login from "./component/login";
import Navbar from "./component/Navbar";          
import Signup from './component/Signup'
import Home from "./component/Home";
import Contact from "./component/Contact";


function App() {
  return (
   
   
<Provider store={ store }>
<Router>
<Navbar/>

<Route exact path="/">
   <Home/>
   </Route>

   <Route path="/login">
   <Login/>
   </Route>

   <Route path="/signup">
   <Signup/>
   </Route>

   <Route path="/contact">
   <Contact/>
   </Route>

   
</Router>
</Provider>
   
  )
}

export default App