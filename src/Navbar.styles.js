import styled from '@emotion/styled'

export const Container = styled.div`
display:flex;
`

export const NavContainer = styled.div`
position:fixed;
top:0;
width:100%;
height:80px;
display:flex;
justify-content:flex-end;
padding:20px;
background:${p => p.show ? '#222' : "transparent"};
align-items:center;
z-index:1;
transition:0.33s all ease-in-out;

`
export const NavBigImage = styled.div`
width:100%;
`
export const playIcon = styled.div`

`


export const NavbarLogo = styled.img`
position:fixed;
left:5%;
top:0%;
margin-top:22px;
width:60px;
object-fit:contain;
background-image:url(${p => p.src})
flex:1;
`
export const NavbarForm = styled.form`
min-width:200px;
height:50px;
background-color:white;
border-radius:10px;
display:flex;
justify-content:center;
align-items:center;

`
export const NavbarInput = styled.input`
padding:10px;
width:90%;
heigth:90%;
border:none;
outline:none;
`

export const NavbarButton = styled.button`
width:50px;
height:50px;
background-color:white;
border-radius:10px;
margin-left:5px;
`


export const NavbarFavourites = styled.div`
font-size:22px;
margin-right:70px;
`
