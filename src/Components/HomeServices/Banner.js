import React from "react";
import styled from "styled-components";
import homeimg from '../../assets/servicebackground.jpg'
function Banner(){
return(
    <>
<Main>
    <Head>
<Title>HOME SERVICES</Title>
<Heading>
Grow your business and
<br/>your bottom line.
</Heading>
<Title>Podium helps home services businesses manage a high demand of customers more efficiently, connect with customers quickly through text, and make it easy for happy homeowners to leave more reviews.</Title>
<Button>Start a free trial</Button>
</Head>
</Main>
<Main2>
    <Head>
<Iframe src="https://www.youtube.com/embed/HNFft8MLjYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></Iframe>
</Head>
</Main2>
</>
)
}

export default Banner

const Main = styled.div`
display:flex;
justify-content:center;
background-image:url(${homeimg});
padding-top:45px;
padding-bottom:70px;
background-size: cover;
color:white;
`
const Iframe=styled.iframe`
position:relative;
margin-top:-330px;
border-radius:25px;
width:100%;
height:600px;
border:1px solid black;
@media (min-width: 260px) and (max-width: 820px){
    height:400px;
    margin-top:-170px;
    }
`
const Main2 = styled.div`
display:flex;
justify-content:center;
padding-top:45px;
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
const Title=styled.p`
font-size:22px;
text-align:start;
width:48%;
margin-top:30px;
@media (min-width: 260px) and (max-width: 820px){
    width:100%;
    }
`
const Heading=styled.p`
font-weight:900;
font-size:64px;
text-align:start;
@media (min-width: 260px) and (max-width: 820px){
    width:100%;
    }
`
const Button = styled.button`
background-color:blue;
border: 1px solid blue;
color:white;
font-size:18px;
border-radius:8px;
padding:15px;
font-weight:700px;
display:flex;
justify-content:start;
margin-top:80px;
margin-bottom:300px;
@media (min-width: 260px) and (max-width: 820px){
    margin-bottom:100px;

    }
`