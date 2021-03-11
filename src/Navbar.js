import React, { useState } from 'react'
import * as s from './Navbar.styles'
import { Zap } from '@styled-icons/octicons'
import { Link } from 'react-router-dom'

const logoImg = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"

const handleSearch = () => {

}

const Navbar = () => {
    const [search, setSearch] = useState('')
    console.log('search ', search)

    return (
        <s.NavContainer>
            <Link to="/">
                <s.NavbarLogo
                    src={logoImg} />
            </Link>
            <Link to="/favourites" style={{ textDecoration: 'none', color: 'white' }}>
                <s.NavbarFavourites>Favourites</s.NavbarFavourites>
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
