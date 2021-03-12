import React, { useContext } from 'react'
import Row from './Row'
import { requests } from './requests'
import Banner from './Banner'
import MovieContext from './MovieContext'
import FilteredMovies from './FilteredMovies'


const MainPage = ({ history }) => {

    const { baseUrl, typeOfMovies } = useContext(MovieContext)

    return (
        <>
            <Banner />

            {typeOfMovies === 'randomMovies' ? (
                <>
                    <Row category={requests.fetchTrending} title="Trending" large history={history} />
                    <Row category={requests.fetchTopRated}
                        title="Top Rated" />
                </>
            ) : (
                <FilteredMovies/>
            )}
        </>
    )
}

export default MainPage
