import React,{useEffect,useState, Component} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route,Link, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import  axios from 'axios'
import DogDetails from './DogDetails'
import Details from './Details'
import style from './DogDetails.module.css'
import Login from './Login'
import Signup from './Signup';
import HomePage from './HomePage';

const App = () => { 

  const [breeds,setBreeds] = useState([]);

  useEffect(() => {
    getBreeds();
  }, []); 
  const getBreeds = async (e) => {
    
    //   e.preventDefault();
      const response = await fetch (`https://dog.ceo/api/breeds/list/all`)
      const data = await response.json();
      let x=data.message
      let m=[]
      for (var b in x) {
        if (x.hasOwnProperty(b)) {
          m.push(b);
        }
      }
      setBreeds(m)
      console.log(breeds)
  }

       
  return (
        <Router  >
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/home" component={HomePage} />
            <Route path="/details" exact component={Details} />
          </Switch>
        </Router>
      );
  }


export default App;

