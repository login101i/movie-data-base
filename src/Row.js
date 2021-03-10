import React, { useEffect, useState } from 'react'
import axios from './axios'
import * as s from './Row.styles.'

const Row = ({ category, title }) => {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const request = await axios.get(category)
                const result = request.data.results
                console.log("result z MovieContext", result)
                setMovies(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovies()
    }, [])


    return (
        <s.RowContainer>
            <s.RowTitle>{title}</s.RowTitle>
            <s.Row>
                    
                {movies.map(movie => (
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
