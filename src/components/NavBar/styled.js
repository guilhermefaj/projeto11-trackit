import styled from "styled-components";

export const NavContainer = styled.div`
background-color: #126BA5;
height: 70px;
width:375px;
display:flex;
justify-content: space-between;
padding-left: 18px;
padding-right:18px;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position: fixed;
z-index: 1;
top: 0;
h1{
    font-family: 'Playball';
    color: white;
    font-size: 38.982px;

}
img{
    max-width: 51px;
    min-width: 51px;
    max-height: 51px;
    min-height: 51px;
    border-radius: 50%;
}
` 