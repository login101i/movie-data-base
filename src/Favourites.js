import React, { useEffect, useState } from 'react'
import * as s from './Favourites.styles'
import { Link } from 'react-router-dom'




const Favourites = () => {
    const [favourites, setFavourites] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original"


    useEffect(() => {

        if (localStorage.getItem("FAVOURITES")) setFavourites(JSON.parse(localStorage.getItem("FAVOURITES")))
        console.log('FAVOURITES----', favourites)

    }, [favourites.length])

    return (
        <s.FavouriteContainer>
            <s.RowTitle>Your favourites movies</s.RowTitle>

            <s.Row>
                {favourites.map(fav => (
                    <Link to={`/moviedetails/${fav.movieDetails.id}`} >
                        <s.RowImage
                            src={`${base_url}${fav.movieDetails.backdrop_path}`}
                        />
                    </Link>
                )

                )}
            </s.Row>
        </s.FavouriteContainer>
    )
}

export default Favourites
