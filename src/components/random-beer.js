import React from 'react';
import axios from "axios"
import {useState, useEffect} from "react"
import { Switch, Route, Link, Router } from "react-router-dom"

function RandomBeer(){

    const [beer, setBeer] = useState([]);
    const[fetching, setFetching] = useState(true); 
    
    
    useEffect(() => {                                        
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((response) => {
            console.log('response.data', response.data);
            setBeer(response.data);
            setFetching(false); 
          });  
      }, [] ); 

      if (fetching) {  
        return (<p>Loading...</p>)
        }
    
     else {
        return (
            <div>
                <Link to="/">Home Page</Link>
                <h2>Random Beer</h2>
            
                    <div>         
                       <h6>{beer.name}</h6>    
                       <img src={beer.image_url}></img>
                       <p>{beer.tagline}</p>
                       <p>{beer.first_brewed}</p>
                       <p>{beer.cattenuation_level}</p>
                       <p>{beer.description}</p>
                       <p>{beer.contributed_by}</p>
    
                    </div>
            </div>
    
                )
        }
           
     }

export default RandomBeer