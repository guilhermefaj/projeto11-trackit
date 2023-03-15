import styled from "styled-components";

export const FooterContainer = styled.div`
display:flex;
width:375px;
height:70px;
position: fixed;
top: 597px;
background-color: white;
z-index: 1;
align-items:center;
justify-content: space-between;
div{
    display:flex;
    justify-content:center;
    align-items: center;
    background-color: #52B6FF;
    width: 91px;
    height: 91px;
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    left:142px;
    padding: 5px;
}
p{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size:18px;
    color:#52B6FF;
}
p:first-child{
    padding-left:36px;
}
p:last-child{
    padding-right:36px;
}
`