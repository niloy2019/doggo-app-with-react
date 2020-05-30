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
import Logout from './Logout';
import Admin from './Admin';
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
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/admin" component={Admin} />
        <Route path="/logout" component={Logout} />
        <Route path="/home" component={HomePage} />
        <Route path="/details" exact component={Details} />
      </Switch>
    </Router>

    // <Router>
    //     <Route path="/" exact render={
    //       () => {
    //         return(
    //               <div className="dogDetails">
    //                 {breeds.map(breed => (
    //                     <Link to={{
    //                       pathname:'/details',
    //                       state:{
    //                        breedName: breed
    //                       //  image :image    
    //                       }
    //                   }} 
    //                   activeClassName="active" className={style.link } >
    //                            <DogDetails breedName={breed} className={style.dogDetails} />   
    //                     </Link>
    //                 ))}
    //             </div>
            
    //         )
    //       }
    //     } />
    //     <Route path="/details" exact component={Details} />
        
        
    //  </Router>
      );
  }


export default App;

