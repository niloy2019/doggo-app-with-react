import React, { useEffect,useState } from 'react';
import style from './DogDetails.module.css'
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



const DogDetails = ( {breedName}) => {

    const [image,setImage] =  useState("");
    
    useEffect(() => {
       getBreedImage();
    }, []); 

    const getBreedImage= async () => {
        const response = await fetch (`https://dog.ceo/api/breed/${breedName}/images/random`)
        const data = await response.json();
        console.log(typeof data.message)
        let x=data.message
        setImage(x)
    }   

    return(
         <Router>
            <div className={style.recipe}  >
                    <h3>{breedName}</h3>
                    <img src={image} className={style.image} alt={image} />               
            </div>
         </Router>   
    )
} 


export default DogDetails