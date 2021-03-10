import React, { createContext } from 'react'

export const MovieContext = createContext()

const MovieState = ({ children }) => {

    const API_KEY = "1329705d96ffd5e3a197e84f0b8875e6"
    return (
        <MovieState.Provider
            value={{
            }}
        >
            {children}
        </MovieState.Provider>
    )
}

export default MovieState