import React, { useEffect,useState } from 'react';
import style from './DogDetails.module.css'
import { Link,Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleLogout } from 'react-google-login';

//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

const Details = (props) => {
    
    console.log("Details Page"+props)

    // use your hook her
    const forceUpdate = useForceUpdate();
    
    const [image,setImage] =  useState("");
    const [change,setChange] = useState("");
    const [breedName,setBreedName] = useState("")

    useEffect(() => {
    if(localStorage.getItem("token")!=null && props.location.state!=null){
            setBreedName(props.location.state.breedName)
            console.log("Breed Name Done")
            getBreedImage();
            console.log("Image Done")
            console.log(props)
    }
    }, [change]); 

    const getBreedImage= async () => {
            const response = await fetch (`https://dog.ceo/api/breed/${props.location.state.breedName}/images/random`)
            const data = await response.json();
            setImage(data.message)
    }   

    function refreshPage() {
        setChange(Math.random())
      }

    const  logout = () => {
        localStorage.removeItem("token")
        forceUpdate()
    } 

    if(localStorage.getItem("token")==null){
        return <Redirect to="/" />
     }else if(props.location.state==null){
         return <Redirect to="/home" />
     }

     else{

        let button

        if(localStorage.getItem("token")==="google"){
             button= <GoogleLogout
                         clientId="443492183069-1ktqu6q8fcqcfocohvdlgnic9urgo5eh.apps.googleusercontent.com"
                         buttonText="Logout"
                         onLogoutSuccess={logout}
                     >
                          <Link to="/" onClick={logout} className={style.li2} >Log out</Link>
                     </GoogleLogout>
        }else{
          button=  <button className={style.btn} onClick={logout} >
                      <Link to="/" onClick={logout} className={style.li} >Log out</Link>    
                   </button>
        }
        return(
            <div className={style.recipe2}  >
                
                <h3> Name : {breedName}</h3>
                <img src={image} className={style.image2} alt={image} />
    
                <div className={style.change} >
                    <table >
                        <tr>
                            <td>
                                {/* <button type="submit" onClick={refreshPage} className={style.btn} >Home</button> */}
                                <button className={style.btn}>
                                    <Link  className={style.li} to={{
                                                                        pathname:'/home',
                                                                        state:{
                                                                            name:props.location.state.name,
                                                                            imageUrl:props.location.state.imageUrl
                                                                        } 
                                                                    }} 
                                     >
                                       Home
                                    </Link>
                                </button>
                                <button type="submit" onClick={refreshPage} className={style.btn2} >Change</button>
                                {button}
                            </td>
                        </tr>
                    </table>
                </div>
             </div>
        )
    } 

     }
    

    


export default Details