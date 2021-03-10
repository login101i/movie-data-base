import axios from './axios'
import React, { createContext, useEffect, useState } from 'react'
export const MovieContext = createContext()



export const MovieState = ({ children }) => {
    const [movies, setMovies] = useState([])
    const API_KEY = "1329705d96ffd5e3a197e84f0b8875e6"

    const fetchTrending = `/trending/all/week?api_key=${API_KEY}&language=en-US`

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const request = await axios.get(fetchTrending)
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
        <MovieContext.Provider
            value={{
                movies,
                setMovies
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext