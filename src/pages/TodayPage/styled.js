import styled from "styled-components";

export const TodayContainer = styled.div`
background-color: #F2F2F2;
width: 375px;
margin-top:70px;
padding-left: 17px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
line-height: 29px;
padding-bottom: 120px;
`

export const TodayTitle = styled.div`
h1{
    padding-top: 28px;
    font-size: 23px;
    color: #126BA5;
}
h2{
    font-size: 18px;
    color: #BABABA;
}
`

export const HabitsContainer = styled.div`
margin-top: 28px;
display: flex;
flex-direction: column;
gap: 10px;
margin-right: 17px;
h1{
    color:#666666;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 7px;
}
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
}
`

export const HabitContainer = styled.div`
background-color: white;
width: 340px;
height: 94px;
border-radius: 5px;
padding: 13px;
display: flex;
justify-content: space-between;
ion-icon{
    color: white;
    background-color: ${props => props.done ? "#8FC549" : "#E7E7E7"};
    width: 69px;
    height: 69px;
    border-radius: 5px;
    position: relative;
    right: 0;
}
`

export const HabitTexts = styled.div`
display: flex;
flex-direction: column;
&:last-child{
    margin-bottom: 70px;
}
`

