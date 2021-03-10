import styled from '@emotion/styled'

export const RowContainer = styled.div`
background-color:#222;

`

export const Row = styled.div`
display:flex;
overflow-y:hidden;
overflow-x:scroll;

&::-webkit-scrollbar{
    display:none !important;
}

`
export const RowImage = styled.img`
width:100%;
height:200px;
object-fit:cover;
margin-right:20px;
cursor:pointer;
background-image:url(${p => p.src});

`