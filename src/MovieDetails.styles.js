import styled from '@emotion/styled'

export const DetailsContainer = styled.div`
background-color:#222;
min-height:100vh;
padding-top:90px;
margin:0 auto;
width:100%;
`
export const YoutubeContainer = styled.div`
width:100%;
`
export const ContentContainer = styled.div`
margin:0 30px;
`

export const PosterContainer = styled.div`
width:100%;
height:450px;
display:flex;
justify-content:center;
align-items:center;
background-image:url(${p => p.src});
  background-size: auto;
  object-fit:cover;
  background-repeat:none;

margin-bottom:50px;

`

export const Img = styled.img`
height:600px;
object-fit:contain;
`
export const BtnFavourite = styled.button`
min-width:200px;
max-width:201px;
height:50px;
color:white;
border-radius:10px;
outline:none;
border:none;
margin-bottom:20px;
transition:0.3s all ease-in-out;
background-color:${p => !p.alreadyFavourite ? "red" : "grey"};


&:hover{
   transform: ${p => p.alreadyFavourite ? 'scale(1.04)' : 'none'}
}
`
export const BtnFavouriteRemove = styled.button`
min-width:200px;
max-width:201px;
height:50px;
color:white;
border-radius:10px;
outline:none;
border:none;
margin-bottom:20px;
margin-left:30px;
transition:0.3s all ease-in-out;
background-color:${p => !p.alreadyFavourite ? "grey" : "grey"};


&:hover{
   transform: scale(1.04);
}
`


export const MovieTitle = styled.div`
font-size:44px;
font-weight:600;
margin-bottom:23px;
`
export const MovieOverview = styled.div`
margin-bottom:20px;

`
export const MovieInfo = styled.div`
font-weight:600;
margin-left:50px;
display:flex;

`

export const BtnReturn = styled.button`
width:200px;
height:50px;
background-color:lightblue;
color:white;
border-radius:10px;
outline:none;
border:none;
margin-bottom:20px;
transition:0.3s all ease-in-out;
margin-top:40px;

&:hover{
    transform:scale(1.04)
}
`