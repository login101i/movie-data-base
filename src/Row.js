import React, { useEffect, useState } from 'react'
import axios from './axios'
import * as s from './Row.styles.'
import Loader from './Loader'

const Row = ({ category, title, large, history }) => {
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

    const goToDetails = (id) => {
        history.push(`/moviedetail/${id}`);
    }


    return (
        <s.RowContainer>
            <s.RowTitle>{title}</s.RowTitle>
            <s.Row>
                {movies.length === 0 ? <Loader /> : (

                    movies.map(movie => (
                        large ? (
                            <s.RowImage
                                key={movie.id}
                                src={`${base_url}${movie.backdrop_path}`}
                                large
                                onClick={() => goToDetails(movie.id)}
                            />
                        ) : (
                                <s.RowImage
                                    key={movie.id}
                                    src={`${base_url}${movie.backdrop_path}`}
                                />
                            )
                    ))

                )}



            </s.Row>
        </s.RowContainer>
    )
}

export default Row
