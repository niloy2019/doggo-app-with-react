import React, { useEffect,useState,Component } from 'react';
import style from './DogDetails.module.css'
import { BrowserRouter as Router, Route,Link,Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Details = (props) => {
    
    console.log("Details Page"+props)
    
    const [image,setImage] =  useState("");
    const [change,setChange] = useState("");
    const [breedName,setBreedName] = useState("")

    useEffect(() => {
    if(localStorage.getItem("token")!=null && props.location.state!=null){
            setBreedName(props.location.state.breedName)
            console.log("Breed Name Done")
            getBreedImage();
            console.log("Image Done")
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
    } 

    if(localStorage.getItem("token")==null){
        return <Redirect to="/" />
     }else if(props.location.state==null){
         return <Redirect to="/home" />
     }
     else{
        return(
            <div className={style.recipe2}  >
                
                <h3> Name : {breedName}</h3>
                <img src={image} className={style.image2} />
    
                <div className={style.change} >
                    <table >
                        <tr>
                            <td>
                                {/* <button type="submit" onClick={refreshPage} className={style.btn} >Home</button> */}
                                <button className={style.btn}>
                                    <Link to="/home" className={style.li} >Home</Link>
                                </button>
                                <button type="submit" onClick={refreshPage} className={style.btn2} >Change</button>
                                <button className={style.btn}>
                                    <Link to="/" onClick={logout} className={style.li} >Log out</Link>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
             </div>
        )
    } 

     }
    

    


export default Details