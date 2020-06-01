import React,{useEffect,useState, Component} from 'react';
import { BrowserRouter as Router, Route,Link, Switch, Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import  axios from 'axios'
import DogDetails from './DogDetails'
import Details from './Details'
import style from './DogDetails.module.css'



class HomePage extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
        breeds : []   
    }
    this.getBreeds=this.getBreeds.bind(this)
    this.logout=this.logout.bind(this)
    this.getBreeds()
  }

   getBreeds = async () => {
    
    //   e.preventDefault();
      const response = await fetch (`https://dog.ceo/api/breeds/list/all`)
      const data = await response.json();
      let x=data.message
      let m=[]
      console.log("dnn")
      for (var b in x) {
        if (x.hasOwnProperty(b)) {
          m.push(b);
        }
      }
      this.setState({
        breeds : m
      })
  }

   logout = () => {
    localStorage.removeItem("token")
    this.forceUpdate()
  }
  
  render() {
    if(localStorage.getItem("token")==null){
            return <Redirect to="/" />
     }
     
    return (
      <div className={style.dogDetails}>

              <br/> 
              <div className={style.div}>
                 <button onClick={this.logout} className={style.btn} >Log out</button>
                 <br/>
                 <h1>List of Dog Breeds</h1>
              </div>

              <div className={style.recipes}>
                    {this.state.breeds.map(breed => (
                        <Link to={{
                                    pathname:'/details',
                                    state:{
                                        breedName: breed 
                                    } 
                                  }} 
                                activeClassName="active" 
                                className={style.link }
                        >
                            <DogDetails breedName={breed}  />   
                        </Link>
                    ))}
              </div>
      </div>
  
    )
  }
}

export default HomePage

