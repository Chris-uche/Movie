import React from 'react'
import Movie from './Movie.js'



const Results=({movie})=>{
    

    return( 
        <>
        <div className="container">
            
            {movie.length === 0? (<h1>No Movie Found</h1>) : (
                movie.map(movieResults=>(
                    <Movie key={movieResults.id}
                    title={movieResults.title}
                    poster_path={movieResults.poster_path}
                    overview={movieResults.overview}
                    vote_average={movieResults.vote_average}
                    />
                ))
                
            )}
             
        </div>

        </>
    )


}

export default Results