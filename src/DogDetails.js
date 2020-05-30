import React, { useEffect,useState,Component } from 'react';
import style from './DogDetails.module.css'
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from './Details'



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

    const details = () => {
        
    }

    return(
       
         <Router>
           
                <div className={style.recipe} onClick={details} >
                    <table>
                        <tr>
                            <td></td>
                            <td className={style.td}> <h3>{breedName}</h3>   </td> 
                            <td className={style.td}>  <img src={image} className={style.image} /></td>
                        </tr>
                    </table>
                   
                    
                </div>
            
         </Router>   
    )
} 


export default DogDetails