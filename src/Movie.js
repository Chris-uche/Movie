import React from 'react'
import imagesEndpoint from './imageEndpoint'

const Movie =({title,poster_path,overview,vote_average})=>{
    const setVote=(vote) =>{
        if(vote >=8){
            return "green";
            
        }else if(vote >=6){
            return "orange"
        }
        else{
            return "red"
        }
        
    }


    
    return(
        <>
        <div className="movieApp">
            <img src={imagesEndpoint + poster_path} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVote(vote_average)}`}>{vote_average}</span>

            </div>
            <div className="overView">
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>

        </div>

        </>
    )
}
export default Movie