import React, { useContext } from 'react'
import Row from './Row'
import { requests } from './requests'
import Banner from './Banner'


const MainPage = ({ history }) => {

    return (
        <>
            <Banner />
            <Row category={requests.fetchTrending} title="Trending" large history={history} />
            <Row category={requests.fetchTopRated}
                title="Top Rated"
            />
        </>
    )
}

export default MainPage
