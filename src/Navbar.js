import React, { useState, useEffect, useContext } from 'react'
import * as s from './Navbar.styles'
import { Zap } from '@styled-icons/octicons'
import { Link } from 'react-router-dom'
import MovieContext from './MovieContext'

const logoImg = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"





const Navbar = () => {
    const [show, setShow] = useState()
    console.log('show', show)

    const { handleSearch, search, setSearch } = useContext(MovieContext)


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 22) {
                setShow(true)
            } else {
                setShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <s.NavContainer
            show={show}
        >
            <Link to="/">
                <s.NavbarLogo
                    src={logoImg} />
            </Link>
            <Link to="/favourites" style={{ textDecoration: 'none', color: 'white' }}>
                <s.NavbarFavourites>My Favourites</s.NavbarFavourites>
            </Link>
            <s.Container>
                <s.NavbarForm onSubmit={handleSearch}>
                    <s.NavbarInput
                        type="text"
                        placeholder="Search movie here"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </s.NavbarForm>
                <s.NavbarButton
                    type="submit"
                ><Zap />
                </s.NavbarButton>
            </s.Container>

        </s.NavContainer >
    )
}

export default Navbar
