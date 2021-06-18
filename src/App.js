import React,{useState, useEffect} from "react"
import './App.css';
import featureEndpoint from './featureEndpoint';
import searchEndpoint from './searchEndpoint';
import Results from './Results';


const MovieApp=()=>{
  const [movie, setMovie]= useState([]);
  const [searchItem, setSearchItem] = useState("")


  useEffect(()=>{
    fetch(featureEndpoint)
    .then((response)=> response.json())
    .then((response)=>{
      setMovie(response.results)
      //console.log(response.results)
    })
    
  },[])

  async function requestForMovie(){
    const res = await fetch(searchEndpoint + searchItem)
    const data = await res.json()
    setMovie(data.results || [])
  }
  
  

  return(
    <div className="App">
      <header className="header">
            <form className="" onSubmit={Event=>{
                Event.preventDefault();
                requestForMovie()
              
               
              }}
                >
              <input type="search" className="search" placeholder="Search...." 
               value={searchItem} 
               onChange={e=>setSearchItem(e.target.value)}/>
                
            </form>
            
            

        </header>

      
      <Results movie={movie}/>
    </div>
  )

}


export default MovieApp;
