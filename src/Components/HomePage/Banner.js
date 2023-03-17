import React from "react";
import styled from "styled-components";
import textright from '../../assets/textright.jpg'
import paymentright from '../../assets/paymentright.jpg'
import reviewright from '../../assets/reviewright.jpg'
import chatright from '../../assets/chatright.jpg'
import messageright from '../../assets/messageright.jpg'
import TextLoop from "./TextLoop";
import ImageLoop from "./ImageLoop";


function Banner(){
const texts=['Text Marketing','Review','Payment','Website Chat','Messaging']
const imgs=[textright,reviewright,paymentright,chatright,messageright]
  const interval = 3000;
return(
    <Main>
        <Head>
          <First>
          <div>
            <MainHead><p>The </p>
            &nbsp;
            <TextLoop texts={texts} interval={interval} />
</MainHead>
          </div>
          <MainHead2>tool to grow your</MainHead2>
          <br/>
          <MainHead2>local business</MainHead2>
        <Subhead>Manage all of your communication—from reviews to <br/>
        website conversations to text marketing, payments, and <br/> more—with Notifi.</Subhead>
        <br/>
        <Buttons>
        <Free>Start a free trial*</Free>
        <Demo>Get a demo</Demo>
        </Buttons>
        <Desc>*No credit card required. Free for 14 days.</Desc>

          </First>

          <div>
<ImageLoop texts={imgs} interval={interval} />
          </div>
        </Head>
    </Main>
)
}
export default Banner


const Main = styled.div`
display:flex;
justify-content:center;
background-color:#eeecea;
padding-top:45px;
padding-bottom:70px;
`
const Head=styled.div`
width:1312px;
display:flex;
justify-content:space-between;
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;
}
`
const MainHead=styled.div`
font-size:62px;
font-weight:1000;
text-align:start;
display:flex;
@media (min-width: 260px) and (max-width: 820px){
    font-size:32px;
    margin-bottom:10px;
}
`
const MainHead2=styled.h1`
font-size:62px;
font-weight:1000;
text-align:start;
margin-top:-60px;
@media (min-width: 260px) and (max-width: 820px){
    font-size:32px;
    margin-top:-35px;
}
`
const Subhead=styled.p`
font-size:24px;
font-weight:300;
text-align:start;
@media (min-width: 260px) and (max-width: 820px){
    font-size:20px;
    margin-top:50px;
}
`
const Desc=styled.p`
font-size:15px;
text-align:start;
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
width:25%;
@media (min-width: 260px) and (max-width: 820px){
    width:50%;
}
`
const Demo=styled.button`
background-color:white;
background:white;
color:blue;
font-weight:700;
border-radius:8px;
border:1px solid blue;
height:38px;
width:25%;
@media (min-width: 260px) and (max-width: 820px){
    width:50%;
    }
`
const Buttons=styled.div`
display:flex;
justify-content:start;
`

const First=styled.div`
width:100%;
margin-top:35px;
@media (min-width: 260px) and (max-width: 820px){
    margin-top:5px;
}
`