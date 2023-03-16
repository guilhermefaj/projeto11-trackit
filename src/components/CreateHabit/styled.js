import styled from "styled-components";

export const CreateHabitContainer = styled.form`
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

export const DaysButtons = styled.div`
display: flex;
justify-content: flex-start;
background-color: white;
gap: 4px;
`

export const Button = styled.button`
display: flex;
justify-content: center;
border: 1px solid #DBDBDB;
width: 30px;
height: 30px;
border-radius: 5px;
color: ${(props) => (props.isActive ? "white" : "#DBDBDB")};
background-color: ${(props) => (props.isActive ? "#DBDBDB" : "white")};
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
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