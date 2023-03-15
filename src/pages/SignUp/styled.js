import styled from "styled-components";

export const SignUpContainer = styled.div`
display: flex;
width: 375px;
flex-direction: column;
align-items: center;
margin-top: 68px;
p{
    margin-top: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
}
`

export const SignUpElements = styled.form`
display: flex;
flex-direction: column;
margin-top:32px;
gap: 6px;
input{
    color: #666666;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    padding-left: 10px;
}
button{
    display:flex;
    align-items:center;
    justify-content: center;
    width: 303px;
    height: 45px;
    border-radius: 5px;
    background-color: #52B6FF;
    opacity: ${props => props.load ? 0.7 : 1};
    color: white;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
}
`
