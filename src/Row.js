import React, { useContext } from 'react'
import * as s from './Row.styles.'
import { MovieContext } from './MovieContext'

const Row = () => {

    const { movies, setMovies } = useContext(MovieContext)
    console.log("movies z row", movies)
    const base_url = "https://image.tmdb.org/t/p/original"

    return (
        <s.RowContainer>
            <s.Row>
                {movies.map(movie=>(
                    <s.RowImage
                    key={movie.id}
                    src={`${base_url}${movie.backdrop_path}`}
                    />
                ))}
               
            </s.Row>
        </s.RowContainer>
    )
}

export default Row
