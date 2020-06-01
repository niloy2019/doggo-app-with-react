import React, { useEffect,useState,Component,Redirect } from 'react';
import style from './DogDetails.module.css'
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Details = (props) => {

    const breedName=props.location.state.breedName

    console.log("Details Page"+props)

    const [image,setImage] =  useState("");
    const [loggedIn,setLoggedIn] = useState("");
    const [change,setChange] = useState("");

    useEffect(() => {
       getBreedImage();
       setLoggedIn(true);
    }, [change]); 

    const getBreedImage= async () => {
        const response = await fetch (`https://dog.ceo/api/breed/${breedName}/images/random`)
        const data = await response.json();
        console.log(typeof data.message)
        let x=data.message
        setImage(x)
    }   

    function refreshPage() {
        setChange(Math.random())
        console.log("change : "+change)
      }

    const  logout = () => {
        localStorage.removeItem("token")
    } 

    const home = () => {
        setLoggedIn(false)
    }

    // if (!loggedIn) {
        // return <Redirect to="/home" />
    // }    

    return(
        <div className={style.recipe2}  >
            
            <h3> Name : {breedName}</h3>
            <img src={image} className={style.image2} />

            <div className={style.change} >
                <table >
                    <tr>
                        <td>
                            {/* <button type="submit" onClick={refreshPage} className={style.btn} >Home</button> */}
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


export default Details