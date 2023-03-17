import React from 'react'
import styled from 'styled-components'
import reviewsicon from '../../assets/reviewicon.png'
import reviews from '../../assets/review.png'
import webchaticon from '../../assets/webchaticon.png'
import webchat from '../../assets/webchat.png'
import campaignicon from '../../assets/campaignicon.png'
import campaign from '../../assets/campaign.png'
import messagingicon from '../../assets/messagingicon.png'
import messaging from '../../assets/messaging.png'
import paymenticon from '../../assets/paymentsicon.png'
import payment from '../../assets/payments.png'
function MobileLocalMarketing(){
return(
    <Main>
    <Head>
        <div>
        <Headtext>The marketing and communication platform <br/>for local businesses</Headtext>
        <br/><br/>
        <Tiles>
        <Icon src={reviewsicon}/>
          <First>
          <Heading>Reviews</Heading>
          <Desc>Drive more reviews and website traffic.</Desc>
          <Learn>{`Learn more 🡢`}</Learn>
          </First>
          <div>
          <Image src={reviews}/>
          </div>
        </Tiles>
        <br/><br/><br/><br/>
        <Tiles>
        <Icon src={webchaticon}/>
        <First>
        <Heading>Webchat</Heading>
        <Desc>Turn more website visitors into leads and repeat customers.</Desc>
          <Learn>{`Learn more 🡢`}</Learn>
          </First>
          <div>
          <Image src={webchat}/>
          </div>
        </Tiles>
        <br/><br/><br/><br/>
        <Tiles>
        <Icon src={campaignicon}/>
          <First>
          <Heading>Text campaigns</Heading>
          <Desc>Send text campaigns that get opened 98% of the time.</Desc>
          <Learn>{`Learn more 🡢`}</Learn>
          </First>
          <div>
          <Image src={campaign}/>
          </div>
        </Tiles>
        <br/><br/><br/><br/>
        <Tiles>
        <Icon src={messagingicon}/>
        <First>
        <Heading>Messaging</Heading>
        <Desc>Connect with customers easily through text message and other channels.</Desc>
          <Learn>{`Learn more 🡢`}</Learn>
          </First>
          <div>
          <Image src={messaging}/>
          </div>
        </Tiles>
        <br/><br/><br/><br/>
        <Tiles>
        <Icon src={paymenticon}/>
          <First>
          <Heading>Payments</Heading>
          <Desc>Make paying you quick and convenient with text-to-pay and eCard readers.</Desc>
          <Learn>{`Learn more 🡢`}</Learn>
          </First>
          <div>
          <Image src={payment}/>
          </div>
        </Tiles>
        </div>
    </Head>
    </Main>
)
}
export default MobileLocalMarketing

const Main = styled.div`
display:flex;
justify-content:center;
background-color:white;
padding-top:50px;
padding-bottom:70px;
@media (min-width: 821px) and (max-width: 9999px){
  display:none;
  }
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
const Headtext=styled.h1`
text-align:center;
font-size:50px;
font-weight:900;
margin-bottom:30px;
width:100%;
@media (min-width: 260px) and (max-width: 820px){
  font-size:26px;
   }
`
const Tiles=styled.div`
display:flex;
justify-content:space-between;
padding-left:180px;
@media (min-width: 260px) and (max-width: 820px){
  display:inline;
  padding-left:0px;
}
`

const First=styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
@media (min-width: 260px) and (max-width: 820px){
  display:flex;
  flex-direction:column;
  justify-content:center;
}
`

const Image=styled.img`
width:100%;
`
const Icon=styled.img`
height:50px;
width:50px;
`
const Heading=styled.h1`
font-weight: 700;
font-size: 38px;
color:#333;
text-align:start;
margin-top:-1px;
@media (min-width: 260px) and (max-width: 820px){
  text-align:center;
}
`
const Desc=styled.p`
font-weight:200;
font-size:22px;
text-align:start;
margin-top:-3px;
width:470px;
@media (min-width: 260px) and (max-width: 820px){
width:100%;
text-align:center;
}
`
const Learn=styled.p`
font-weight:700;
font-size:20px;
color:blue;
text-align:start;
margin-top:-5px;
cursor:pointer;
@media (min-width: 260px) and (max-width: 820px){
  text-align:center;
}
`