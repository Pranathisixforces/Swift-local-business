import React from 'react'
import styled from 'styled-components'
import Leads from '../../assets/leads.webp';
import Customer from '../../assets/customers.webp';
import business from '../../assets/business.webp'
function SaveTime(){
return(
<Main>
    <Head>
<Headtext>The easy way to grow your business and
    <br/>save your team time.</Headtext>
    <Tiles>
     <Texts>
        <p className='HeadingText'>Find more leads online.</p>
        <p className='Descriptiontext'>Attract more customers to your home services business by ranking higher in online search results. Send review requests via text to collect more happy reviews and outshine your competition.</p>
     </Texts>
     <Imagediv>
        <img src={Leads} className='rad' alt='Find more leads online.'/>
     </Imagediv>
    </Tiles>
    <Tiles>
    <Imagediv>
        <img src={Customer} className='rad' alt='Respond to customers 5x faster.'/>
     </Imagediv>
     <Texts2>
        <p className='HeadingText'>Respond to customers 5x faster.</p>
        <p className='Descriptiontext'>Connect with leads in a fraction of the time—through text, reviews, social media, Webchat, and more—so you can keep your customers happy and your business growing. Do it all from a single inbox on your computer or mobile device.</p>
     </Texts2>
    </Tiles>
    <Tiles>
     <Texts>
        <p className='HeadingText'>Grow your business, not your task list.</p>
        <p className='Descriptiontext'>Get paid faster, automate routine tasks, and cut overhead so you can keep your team focused on delivering a better customer experience.</p>
     </Texts>
     <Imagediv>
        <img src={business} className='rad' alt='Grow your business, not your task list.'/>
     </Imagediv>
    </Tiles>
    <Tiles className='blackback'>
        <Info>
            <p className='titlehead'>Ready to get started?</p>
            <p className='matter'>Start your 14-day free trial today. It’s risk-free, no strings attached.</p>
        </Info>
        <div>
        <Button><b>Get started now</b></Button>
        </div>
    </Tiles>
    </Head>
</Main>
)
}
export default SaveTime

const Main = styled.div`
display:flex;
position:relative;
justify-content:center;
background-color:white;
padding-top:50px;
padding-bottom:70px;
@media (min-width: 260px) and (max-width: 820px){
   display:none;
   }
`
const Head=styled.div`
width:1312px;
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;
}
.blackback{
background-color:black;
border-radius:30px;
padding:40px;
color:white;
}
`
const Headtext=styled.h1`
text-align:start;
font-size:64px;
font-weight:900;
margin-bottom:30px;
width:100%;
@media (min-width: 260px) and (max-width: 820px){
  text-align:center;
  font-size:44px;
    }
`
const Tiles=styled.div`
display:flex;
justify-content:space-between;
margin-left:80px;
margin-right:80px;
margin-top:100px;
`
const Texts = styled.div`
text-align:start;
margin-top:150px;
.HeadingText{
font-size:37px;
width:80%;
}
.Descriptiontext{
width:80%;
font-size:18px;
margin-top:-13px;
}
`
const Imagediv=styled.div`
width:90%;
height:90%;
.rad{
border-radius:30px;
}
`
const Texts2 = styled.div`
text-align:start;
margin-top:150px;
.HeadingText{
font-size:37px;
width:80%;
margin-left:100px;
}
.Descriptiontext{
width:80%;
font-size:18px;
margin-top:-13px;
margin-left:100px;
}
`
const Info=styled.div`
text-align:start;
.titlehead{
font-size:33px;
margin-top:-2px;
}
.matter{
font-size:18px;
margin-top:-18px;
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
justify-content:end;
margin-top:15px;

`