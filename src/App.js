import React,{useState, useEffect} from "react"
import './App.css';
import featureEndpoint from './featureEndpoint';
import Results from './Results';


const MovieApp=()=>{
  const [movie, setMovie]= useState([]);
  //const [searchitem, setSearchItem] = useState("")


  useEffect(()=>{
    fetch(featureEndpoint)
    .then((response)=> response.json())
    .then((response)=>{
      setMovie(response.results)
      //console.log(response.results)
    })
    
  },[])
  
  

  return(
    <div className="App">
      <Results movie={movie}/>
    </div>
  )

}


export default MovieApp;
