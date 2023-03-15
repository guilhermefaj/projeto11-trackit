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

export const CreateHabitContainer = styled.div`
display: flex;
background-color: white;
width: 340px;
height: 180px;
flex-direction: column;
padding: 18px;
border-radius: 5px;
margin-bottom:29px;
margin-left: 17px;
position: relative;

`
export const InputHabitName = styled.input`
margin-bottom: 8px;
color: #666666;
font-weight: 400;
font-size: 20px;
line-height: 25px;
padding-left: 10px;
`

export const DaysButtons = styled.button`
display: flex;
justify-content: flex-start;
margin-left: -6px;
background-color: white;
gap: 4px;
button{
    display: flex;
    justify-content: center;
    border: 1px solid #DBDBDB;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    color: #DBDBDB;
    background-color: white;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
}
`

export const CancelButton = styled.button`
width: 84px;
height: 35px;
border-radius: 5px;
background-color: white;
color: #52B6FF;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
position: absolute;
right:120px;
bottom: 15px;
`

export const SaveButton = styled.button`
width: 84px;
height: 35px;
border-radius: 5px;
background-color: #52B6FF;
color: white;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
position: absolute;
right:16px;
bottom: 15px;
`