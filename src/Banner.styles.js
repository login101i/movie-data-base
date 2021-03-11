import styled from '@emotion/styled'


export const BannerContainer = styled.div`
width:100%;
object-fit:contain;
height:600px;
background-image:
linear-gradient(
243deg,
rgba(231,153,122, 0.4) 11%,
rgba(131,153,392, 0.4) 31%),
url(${p => p.src})

;
`
export const BannerContent = styled.div`
color:white;
heigth:200px;
margin-left:50px;
padding-top:200px;


`
export const BannerTitle = styled.div`
font-size:44px;

`
export const BannerDescription = styled.div`
font-size:22px;
width:80%;
`
export const BannerButton = styled.div`
max-width:300px;
cursor:pointer;
color:white;
outline:none;
border:none;
padding:10px;
border-radius:8px;
background-color:rgb(50,50,50,0.5);
font-size:24px;
margin-top:30px;
text-align:center;

`
export const BannerFade = styled.div`
height:220px;
width:100%;
  background-image: linear-gradient(180deg, transparent, rgba(75, 32, 124, 0.89), rgb(12,12,12));
}

`