import React,{ Component} from 'react';
import { Link, Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DogDetails from './DogDetails'
import style from './DogDetails.module.css'
import { GoogleLogout } from 'react-google-login';



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

     let button,image

     if(localStorage.getItem("token")==="google"){
          button= <GoogleLogout
                      clientId="443492183069-1ktqu6q8fcqcfocohvdlgnic9urgo5eh.apps.googleusercontent.com"
                      buttonText="Logout"
                      onLogoutSuccess={this.logout}
                  >
                  </GoogleLogout>
                  console.log(this.props.location.state.name)
                  console.log(this.props.location.state.imageUrl)
         image = <img src={this.props.location.state.imageUrl} className={style.image3} alt={this.props.location.state.imageUrl} />          
     }else{
       button= <button onClick={this.logout} className={style.btn} >Log out</button>

     }
     
    return (
      <div className={style.dogDetails}>

              <div className={style.div}>
                  <br/>
                 {button}
                 <br/><br/>
                 <h1>List of Dog Breeds</h1>
              </div>
              
              <div className={style.topcorner} >
                    <div className={style.recipe3}  >
                        <h4 className={style.tx} >{this.props.location.state.name}</h4>
                        {image}
                    </div>
              </div>

              <div className={style.recipes}>
                    {this.state.breeds.map(breed => (
                        <Link to={{
                                    pathname:'/details',
                                    state:{
                                        breedName: breed ,
                                        name:this.props.location.state.name,
                                        imageUrl:this.props.location.state.imageUrl
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

