import React, { useContext } from 'react'
import Row from './Row'
import { requests } from './requests'
import Banner from './Banner'
import MovieContext from './MovieContext'


const MainPage = ({ history }) => {

    const { baseUrl, typeOfMovies } = useContext(MovieContext)
    console.log('baseUrl from Mainpage', typeOfMovies)

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
                <div>Hello from filteredMovies</div>
            )}
        </>
    )
}

export default MainPage
