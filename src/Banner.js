import React, { useContext, useState, useEffect } from 'react'
import * as s from './Banner.styles'
import { MovieContext } from './MovieContext'
import { Link } from 'react-router-dom'

const Banner = () => {

    const { movies, setMovies, urlOriginal } = useContext(MovieContext)
    const [movieImage, setMovieImage] = useState('')
    const [movieSample, setMovieSample] = useState('')


    useEffect(() => {
        const getImage = async () => {
            try {

                const movieSample = await movies[Math.floor(Math.random() * movies.length - 1)]
                setMovieImage(movieSample.backdrop_path)
                setMovieSample(movieSample)
                console.log(`${urlOriginal}${movieImage}`)
            } catch (error) {
                console.log(error)
            }
        }
        getImage()

    }, [urlOriginal, movies])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <>
            <s.BannerContainer
                src={`${urlOriginal}${movieImage}`}>
                <s.BannerContent>
                    <s.BannerTitle >{movieSample.title || movieSample.original_title}</s.BannerTitle>
                    <s.BannerDescription>{truncate(movieSample.overview, 183)}</s.BannerDescription>
                    <Link to={`/moviedetails/${movieSample.id}`}>
                        <s.BannerButton > See details</s.BannerButton>
                    </Link>
                </s.BannerContent>
                <s.BannerFade/>
            </s.BannerContainer>

        </>
    )
}

export default Banner
