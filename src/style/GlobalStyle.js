import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
box-sizing: border-box;
font-family: 'Lexend Deca';
}
button{
    border:none;
}
input{
    border: 1px solid #DBDBDB;
    height: 45px;
    width: 303px;
    border-radius: 5px;
    &::placeholder{
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    padding-left: 10px;
    color: #DBDBDB;
    }
}
`