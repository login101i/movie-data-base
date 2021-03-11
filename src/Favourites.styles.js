import styled from '@emotion/styled'

export const FavouriteContainer = styled.div`
background-color:#222;
min-height:100vh;
padding-top:90px;
margin:0 auto;
`
export const Row = styled.div`
display:flex;
overflow-y:hidden;
overflow-x:scroll;
margin-top:20px;
margpnavbain-left:20px;

&::-webkit-scrollbar{
    display:none !important;
}
`
export const RowTitle = styled.div`
margin-left:20px;
margin-top:40px;
font-size:44px;
margin-bottom:50px;
text-align:center;
`

export const RowImage = styled.img`
width:auto;
height:300px;
object-fit:cover;
margin-right:20px;
cursor:pointer;
background-image:url(${p => p.src});
transition:0.3s all ease-in-out;
&:hover{
  transform:scale(1.04) ;
}
`