import styled from '@emotion/styled'


export const Loader = styled.div`
display:block;
margin-left:auto;
margin-right:auto;
margin-top:20%;
width:100px;
heigh:100%;

&:after {
    content:'';
    display:block;
    width:64px;
    height:64px;
    margin:8px;
    border-radius:50%;
    border-color:yellow;
    animation:LoaderAnimation 2s ease-in-out infinite;
}

@keyframes LoaderAnimation {
    0%{
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg)
    }
}

`