import React, { useEffect, useState, useContext } from 'react'
import * as s from './MovieDetails.styles.js'
import { MovieContext } from './MovieContext'
import axios from './axios'
import StarsRating from 'stars-rating'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'
import styled from '@emotion/styled'
import { Zap } from '@styled-icons/octicons'
import movieTrailer from 'movie-trailer';
import _ from "lodash";


const MovieDetails = ({ match }) => {
    const [movieDetails, setMovieDetails] = useState([])
    const [trailerUrl, setTrailerUrl] = useState()
    const [favourites, setFavourites] = useState([])
    const [alreadyFavourite, setAlreadyFavourite] = useState(false)
    const { baseUrl, apiKey } = useContext(MovieContext)
    const movieId = match.params.id
    console.log("params id ", typeof (movieId))
    console.log('already favourite------------------', alreadyFavourite)


    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieDetails = await axios.get(`${baseUrl}${movieId}?api_key=${apiKey}`)
                const result = movieDetails.data
                const {
                    title,
                    original_title,
                    vote_average,
                    runtime,
                    tagline,
                    genres,
                    overview,
                    relase_date,
                    poster_path,
                    backdrop_path,
                    id,
                    production_countries,

                } = result
                const movieInfo = {
                    title,
                    original_title,
                    vote_average,
                    runtime,
                    tagline,
                    genres,
                    overview,
                    relase_date,
                    poster_path,
                    backdrop_path,
                    id,
                    production_countries
                }
                setMovieDetails(movieInfo)
                console.log("movieDetails", movieInfo)
            } catch (error) {

            }
        }

        fetchMovieDetails()
    }, [baseUrl, movieId, apiKey])


    const src = `https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`
    const opts = {
        height: "500",
        width: "100%",
        playerVars: {
            autoplay: 0,
        }
    }

    const PlayIcon = styled(Zap)`
    height:44px;
    cursor:pointer;
    `
    const handleClick = () => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movieDetails?.title || '')
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch((error) => console.og(error))
        }
    }

    useEffect(() => {
        let favourites = []

        if (localStorage.getItem("FAVOURITES")) {
            favourites = JSON.parse(localStorage.getItem('FAVOURITES'))
            const alreadyFavourite = favourites.find(movie => movie.movieDetails.id.toString() === movieId)
            if (alreadyFavourite) setAlreadyFavourite(true)
            const unique = _.uniqWith(favourites, _.isEqual)
            setFavourites(unique)
            console.log("favourites z useEffect", favourites)

        }
    }, [alreadyFavourite, movieId])


    const addToFavourites = (id) => {
        let favourites = []

        if (localStorage.getItem('FAVOURITES')) {
            favourites = JSON.parse(localStorage.getItem("FAVOURITES"))
        }
        setAlreadyFavourite(true)
        const alreadyFavourite = favourites.find(movie => movie.movieDetails.id.toString() === id)
        // console.log("already favourite ----xx--", alreadyFavourite)
        if (alreadyFavourite) {
            setAlreadyFavourite(true)
            return
        }
        console.log("jadę dalej")
        favourites.push({
            movieDetails
        })
        const unique = _.uniqWith(favourites, "id")
        localStorage.setItem('FAVOURITES', JSON.stringify(unique))
        setFavourites(unique)
        console.log('favourites ze state', favourites)
    }
    const removeFromFavourite = (id) => {
        let favourites = []

        if (localStorage.getItem('FAVOURITES')) {
            favourites = JSON.parse(localStorage.getItem("FAVOURITES"))
            const newFavourites = favourites.filter(movie => movie.movieDetails.id.toString() !== id)
            localStorage.setItem("FAVOURITES", JSON.stringify(newFavourites))
            setAlreadyFavourite(false)
        }
    }

    return (
        <s.DetailsContainer>
            <s.YoutubeContainer>

                {trailerUrl ? (
                    <YouTube videoId={trailerUrl} opts={opts} />
                ) : (
                        <s.PosterContainer src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}>
                            <PlayIcon onClick={handleClick} />
                        </s.PosterContainer>
                    )}

            </s.YoutubeContainer>

            <s.ContentContainer className="row d-flex justify-content-center">
                <s.Img src={src} className='col-12 col-md-4' />

                <s.ContentContainer
                    className="col-12 col-md-4 mt-2 d-flex flex-column mt-3">
                    {alreadyFavourite ? (

                        <div className="d-flex justify-content-between">
                            <s.BtnFavourite disabled>Already favourite</s.BtnFavourite>
                            <s.BtnFavouriteRemove
                                onClick={() => removeFromFavourite(movieId)}
                            >Remove from favourite</s.BtnFavouriteRemove>
                        </div>

                    ) : (
                            <s.BtnFavourite
                                onClick={() => addToFavourites(movieId)}
                                alreadyFavourite
                            >Add to Favourite</s.BtnFavourite>
                        )}
                    Popularity
                    <StarsRating
                        count={5}
                        value={movieDetails.vote_average / 2}
                        edit={false}
                        size={28}
                        color={'#ffd700'} />
                    <s.MovieTitle>{movieDetails.title}</s.MovieTitle>
                    <s.MovieOverview>{movieDetails.overview}</s.MovieOverview>
                    <div className="d-flex  ">
                        <div>Duration in minutes:</div>
                        <s.MovieInfo>{movieDetails.runtime} min</s.MovieInfo>
                    </div>
                    <div className="d-flex  ">
                        <div>Genre:</div>
                        <s.MovieInfo >{movieDetails.genres?.map(genre => (
                            <div className="ml-2" key={Math.random()}>{genre.name}</div>
                        ))}</s.MovieInfo>
                    </div>
                    <div className="d-flex  ">
                        <div>Duration in minutes:</div>
                        <s.MovieInfo>{movieDetails.production_countries && movieDetails.production_countries[0].name} </s.MovieInfo>
                    </div>
                    {movieDetails.relase_date && <div className="d-flex  ">
                        <div>Release date:</div>
                        <s.MovieInfo>{movieDetails.relase_date} </s.MovieInfo>
                    </div>
                    }
                    <Link to="/">
                        <s.BtnReturn>
                            Return to Home Page
                    </s.BtnReturn>
                    </Link>

                </s.ContentContainer>
            </s.ContentContainer>
        </s.DetailsContainer >
    )
}

export default MovieDetails