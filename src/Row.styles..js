import styled from '@emotion/styled'

export const RowContainer = styled.div`

`

export const Row = styled.div`
display:flex;
overflow-y:hidden;
overflow-x:scroll;
margin-top:20px;
margin-left:20px;

&::-webkit-scrollbar{
    display:none !important;
}

`
export const RowTitle = styled.div`
margin-left:20px;
margin-top:40px;
font-size:33px;

`

export const RowImage = styled.img`
width:100%;
height:200px;
object-fit:cover;
margin-right:20px;
cursor:pointer;
background-image:url(${p => p.src});
transition:0.3s all ease-in-out;
&:hover{
  transform:scale(1.04) 
}


${p => p.large && `
height:400px;
margin-rigth:30px;
transition:0.3s all ease-in-out;
&:hover{
  transform:scale(1.04) 
}

`}


`