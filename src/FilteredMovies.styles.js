import styled from '@emotion/styled'

export const FilteredMoviesContainer = styled.div`
max-width:1600px;
border:2px solid white;
display:flex;
justify-content:center;

`
export const Container = styled.div`
border:2px solid blue;
`

export const Text = styled.div`
font-size:30px;
color:white;
text-align:center;
margin-bottom:10px;
`

export const Tilte = styled.div`
font-size:40px;
color:white;
text-align:center;
margin-top:50px;
margin-bottom:50px;
`
export const displayInfo = styled.div`
position:absolute;
bottom:0;
left:0;
right:0;
background-color:white;
color:black;
width:90%;
height:50px;
text-align:center;
`

export const FilteredImage = styled.img`
height:400px;
object-fit:cover;
margin-right:20px;
cursor:pointer;
background-image:url(${p => p.src});
transition:0.3s all ease-in-out;
&:hover{
  transform:scale(1.04) 
}

`
export const Row = styled.div`
margin-top:20px;
margin-left:20px;
display:flex;
flex-direction:column;
width:100%;
`


