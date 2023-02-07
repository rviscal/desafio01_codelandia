import styled from "styled-components";

export const Input = styled.input`

width:800px;
height:29px;
margin-left: 90px;
margin-top: 20px;
background: rgba(0,0,0,0.0);
border-radius: 5px;
border: 0px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #ffffff;
&:focus {
 outline: none;
 box-shadow: 0px 0px 0px 0px;
}
::placeholder,
::-webkit-input-placeholder{
width: 154px;
height: 22px;
left: 574px;
top: 165px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #ffffff;
opacity:0.5;
}`;
