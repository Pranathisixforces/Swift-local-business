import React from 'react'
import styled from 'styled-components'
import Leads from '../../assets/ps1.webp';
import Customer from '../../assets/ps2.webp';
import business from '../../assets/ps3.webp'
function MobSaveTime(){
return(
<Main>
    <Head>
    <Headtext>Give clients an unmatched experience.
</Headtext>

    <Tiles>
     <Texts>
        <p className='HeadingText'>Be the highest-rated option in your area.</p>
        <p className='Descriptiontext'>Make your business the obvious choice by easily gathering reviews from clients on Google, Facebook, or wherever they search for services like yours.</p>
     </Texts>
     <br/>
     <Imagediv>
        <img src={Leads} className='rad' alt='Find more leads online.'/>
     </Imagediv>
    </Tiles>
    <Tiles>
     <Texts>
        <p className='HeadingText'>Respond faster and smarter.</p>
        <p className='Descriptiontext'>Reach new leads faster and communicate in the channels they most prefer so they keep coming back again and again.</p>
     </Texts>
     <br/>
     <Imagediv>
        <img src={Customer} className='rad' alt='Respond to customers 5x faster.'/>
     </Imagediv>
    </Tiles>
    <Tiles>
     <Texts>
        <p className='HeadingText'>Less busywork. More satisfied clients.</p>
        <p className='Descriptiontext'>Reduce time spent on operational tasks with faster payment options and automated workflows so your team can stay focused on serving clients.</p>
     </Texts>
     <br/>
     <Imagediv>
        <img src={business} className='rad' alt='Grow your business, not your task list.'/>
     </Imagediv>
    </Tiles>
    <Tiles2 className='blackback'>
        <Info>
            <p className='titlehead'>Are you ready to get started?</p>
            <p className='matter'>Start your 14-day free trial with Podium today, risk-free, no strings attached.</p>
        </Info>
        <div>
        <Button><b>Get started now</b></Button>
        </div>
    </Tiles2>
    </Head>
</Main>
)
}
export default MobSaveTime

const Main = styled.div`
display:flex;
background-color:white;
padding-top:50px;
padding-bottom:70px;
@media (min-width: 821px) and (max-width: 9999px){
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
  margin-bottom:100px;
    }
`
const Tiles=styled.div`
display:inline;
`
const Tiles2=styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
margin-top:100px;
`
const Texts = styled.div`
text-align:center;
margin-left:20px;
margin-right:20px;
.HeadingText{
font-size:37px;
width:100%;
}
.Descriptiontext{
width:100%;
font-size:18px;
margin-top:-13px;
}
`
const Imagediv=styled.div`
width:100%;
.rad{
border-radius:30px;
width:100%;
height:60%;
margin-bottom:30px;
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