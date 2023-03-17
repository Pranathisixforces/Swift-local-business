import React from 'react';
import styled from 'styled-components';
function GetStarted(){
return(
<Main>
    <Head>
       <div>
        <Headtext>Get started now</Headtext>
        <SubText>Ready to grow? Get a 14-day free trial with Notifi<br/> today, risk-free, no credit card required.</SubText>
        <Buttons>
        <Free>Start a free trial*</Free>
        <Demo>Get a demo</Demo>
        </Buttons>
        </div>
    </Head>
</Main>
)
}
export default GetStarted

const Main = styled.div`
display:flex;
justify-content:center;
background-color:white;
padding-top:50px;
padding-bottom:70px;
`
const Head=styled.div`
width:1312px;
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;
}
`
const Headtext=styled.h1`
text-align:center;
font-size:50px;
font-weight:900;
margin-bottom:30px;
width:100%;
`
const SubText=styled.p`
font-weight: 500;
font-size: 24px;
color:#333;
text-align:center
`
const Free=styled.button`
background-color:blue;
background:blue;
color:white;
font-weight:700;
border-radius:8px;
border:1px solid blue;
margin-right:10px;
height:38px;
padding-left:15px;
padding-right:15px;
`
const Demo=styled.button`
background-color:white;
background:white;
color:blue;
font-weight:700;
border-radius:8px;
border:1px solid blue;
height:38px;
padding-left:15px;
padding-right:15px;
`
const Buttons=styled.div`
display:flex;
justify-content:center;
margin-top:100px;
`