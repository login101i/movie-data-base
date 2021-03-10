import React, { useContext } from 'react'
import Row from './Row'
import { requests } from './requests'


const MainPage = () => {

    return (
        <>
            <Row category={requests.fetchTrending} title="Trending"/>
            <Row category={requests.fetchTopRated} 
            title="Top Rated"
            />
        </>
    )
}

export default MainPage
