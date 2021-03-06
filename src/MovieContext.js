import axios from './axios'
import React, { createContext, useEffect, useState } from 'react'
export const MovieContext = createContext()



export const MovieState = ({ children }) => {
    const [movies, setMovies] = useState([])
    const [typeOfMovies, setTypeOfMovies] = useState('randomMovies')
    const [search, setSearch] = useState('')
    const [keyword, setKeyword] = useState('')
    const apiKey = "1329705d96ffd5e3a197e84f0b8875e6"
    const urlOriginal = "https://image.tmdb.org/t/p/original"
    const baseUrl = "https://api.themoviedb.org/3/movie/"

    const fetchTrending = `/trending/all/week?api_key=${apiKey}&language=en-US`

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const request = await axios.get(fetchTrending)
                const result = request.data.results
                setMovies(result)
            } catch (error) {
                console.log(error)
            }

        }

        fetchMovies()

    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (search.trim() === "") return

        const searchMovies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${search}`)
        const searchResponse = await searchMovies.json()
        setMovies(searchResponse.results)
        console.log("movies after fetch-------", searchResponse)

        setTypeOfMovies("FilteredMovies")
        setKeyword(search)
        setSearch('')

    }

    return (
        <MovieContext.Provider
            value={{
                urlOriginal,
                baseUrl,
                apiKey,
                movies,
                setMovies,
                typeOfMovies,
                search,
                setSearch,
                handleSearch,
                keyword
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext