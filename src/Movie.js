import React from 'react'
import imagesEndpoint from './imageEndpoint'

const Movie =({title,poster_path,overview,vote_average})=>{
    return(
        <>
        <div className="movieApp">
            <img src={imagesEndpoint + poster_path} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className="">{vote_average}</span>

            </div>
            <div className="overview">
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>

        </div>

        </>
    )
}
export default Movie