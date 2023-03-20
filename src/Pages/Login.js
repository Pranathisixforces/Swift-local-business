import React from 'react'
import styled from "styled-components";
// import signpic from '../assets/signup.png';
import Auth from '../Components/Auth/Auth';
function Login(){
return(
    <Dialougediv>
    <Auth/>
   </Dialougediv>
)
}
export default Login

const Dialougediv=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`