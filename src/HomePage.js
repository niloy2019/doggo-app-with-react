import React,{useEffect,useState, Component} from 'react';
import { BrowserRouter as Router, Route,Link, Switch, Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import  axios from 'axios'
import DogDetails from './DogDetails'
import Details from './Details'
import style from './DogDetails.module.css'
import Logout from './Logout';



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
      <div className="dogDetails">

              <br/> 
              <div className={style.div}>
                 <button onClick={this.logout} className={style.btn} >Log out</button>
              </div>
                    
              <div className={style.recipe}  >
                    <table className={style.t} >
                        <tr>
                            <td className={style.td}> <h4>Breed Name</h4>   </td> 
                            <td className={style.td}> <h4>Image</h4></td>
                        </tr>
                    </table> 
                </div>
            
              {this.state.breeds.map(breed => (
                  <Link to={{
                              pathname:'/details',
                              state:{
                                  breedName: breed
                                  //  image :image    
                              } 
                            }} 
                          activeClassName="active" 
                          className={style.link }
                   >
                      <DogDetails breedName={breed} className={style.dogDetails} />   
                  </Link>
              ))}
      </div>
  
    )
  }
}

export default HomePage


// const HomePage = () => {

//   const [breeds,setBreeds] = useState([]);
//   // const token = localStorage.getItem("token");
//   const[loggedIn,setLoggedIn] = useState([]);

//   useEffect(() => {
//     getBreeds();
//     setLoggedIn(true)
//     if(localStorage.getItem("token")==null){
//       return <Redirect to="/" />
//       window.location.reload(false);
//     }
//     // check();
//   }, []); 

//   // const check = () => {
      
//   //   if(token==null){
//   //       setLoggedIn(true)   
//   //   }
    
//   // }

//   const getBreeds = async (e) => {
    
//     //   e.preventDefault();
//       const response = await fetch (`https://dog.ceo/api/breeds/list/all`)
//       const data = await response.json();
//       let x=data.message
//       let m=[]
//       for (var b in x) {
//         if (x.hasOwnProperty(b)) {
//           m.push(b);
//         }
//       }
//       setBreeds(m)
//       console.log(breeds)
//   }

//   const logout = () => {
//     localStorage.removeItem("token")
//     // console.log(token)
//     console.log("snd")
//   }

  
       
//   return (
//     <div className="dogDetails">
                    
//     <button onClick={logout} >Log out</button>
//     <Link to="/logout">Logout</Link>

//             {breeds.map(breed => (
//                 <Link to={{
//                             pathname:'/details',
//                             state:{
//                                 breedName: breed
//                                 //  image :image    
//                             } 
//                           }} 
//                         activeClassName="active" 
//                         className={style.link }
//                  >
//                     <DogDetails breedName={breed} className={style.dogDetails} />   
//               </Link>
//     ))}
// </div>

//     // <Router>
//     //     <Route path="/home" exact render={
//     //       () => {
//     //         return(
                  
            
//     //         )
//     //       }
//     //     } />
        
        
        
//     //  </Router>
//       );
//   }


// export default HomePage;

