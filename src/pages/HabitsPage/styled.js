import styled from "styled-components";

export const HabitsContainer = styled.div`
background-color:#F2F2F2;
margin-top:70px;
margin-bottom: 70px;
width: 375px;
height:527px;
display: flex;
flex-direction: column;
`

export const MyHabits = styled.div`
display: flex;
margin-top: 22px;
margin-bottom:28px;
justify-content: space-between;
padding-left:18px;
padding-right:17px;
align-items: flex-end;
h1{
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
}
button{
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    color: white;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 25px;
    line-height: 34px;
}
`

export const NoHabits = styled.p`
font-family: 'Lexend Deca';
padding-left: 17px;
padding-right: 20px;
color:#666666;
font-weight: 400;
font-size: 18px;
line-height: 22px;
`
