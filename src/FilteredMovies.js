import React, { useContext } from 'react'
import * as s from './FilteredMovies.styles'
import MovieContext from './MovieContext'


const FilteredMovies = () => {
    const { movies, keyword, baseUrl } = useContext(MovieContext)
    console.log("movies z filteredMovies-------------", keyword)
    return (


        movies && movies.length === 0 ? (
            <div>Brak wyników wyszukiwania</div>
        ) : (
            <>
                <s.Tilte>Movies by keyword '{keyword}'</s.Tilte>
                <div className='row m-4'>


                    {movies && movies.map(movie => (
                        <div className="col-sm-12 col-md-4" style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
                            <s.Row key={movie.id} >
                                <s.Text >{movie.title || movie.original_title}</s.Text>
                                <s.FilteredImage
                                    src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} />
                            </s.Row>
                            <s.displayInfo>
                                {movie.overview}
                            </s.displayInfo>
                        </div>
                    ))}

                </div >
            </>

        )


    )
}

export default FilteredMovies


