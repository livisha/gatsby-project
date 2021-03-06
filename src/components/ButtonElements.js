import styled from "styled-components";

// ButttonElement.js is a file for styling the buttons in a project containing the CSS styling for every button component.
// className assigned is used for editing the buttons.
export const Button = styled.button`
border-radius:4px;
background:${({primary})=>(primary ? "#FF4040" : "#0467FB")};
white-space:nowrap;
padding:${({big})=>(big ? "16px 64px" :"10px 20px")};
color:#fff;
font-size:${({fontBig}) => (fontBig ? "20px" :"16px")};
outline:none;
border:none;
cursor:pointer;
font-family:"Ubuntu",sans-sarif;

&:hover{
    transition:all 0.3s ease-out;
    background:${({primary})=>(primary ? "#0467FB" :"#FF4040")}}
    
@media screen and(max-width:960px){
    width:100%;
}
`
