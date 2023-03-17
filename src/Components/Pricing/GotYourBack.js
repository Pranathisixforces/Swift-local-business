import React from "react";
import styled from "styled-components";
import step1 from '../../assets/step1.webp'
import step2 from '../../assets/step2.webp'
import step3 from '../../assets/step3.webp'
import step4 from '../../assets/step4.webp'

function GotYourBack(){
const details=[
{
'icon':step1,
'heading':'Step-by-Step Onboarding',
'desc':'Our simple step-by-step onboarding experience walks you through everything you need to start growing your business.'
},
{
'icon':step2,
'heading':'Phone and Chat Support ',
'desc':'Whatever your business may need, our expert support team is here to help so you can focus on what you do best.'
},
{
'icon':step3,
'heading':'Documentation Training',
'desc':'Whether you have a question or just want to learn more, our extensive resource center has the videos and articles you need.'
},
{
'icon':step4,
'heading':'Account Management',
'desc':'Our dedicated account managers help your local business maximize the value you get out of Podium.'
},
]
return(
<Main>
    <Head>
        <MainHead>We've got your back.</MainHead>
        <Steps>
            {details.map((x,index)=>{
            return(
                <Step key={index}>
                <Icon src={x.icon}/>
                <br/>
                <Heading>{x.heading}</Heading>
                <Desc>{x.desc}</Desc>
             </Step>
            )
            })}
        </Steps>
    </Head>
</Main>
)
}
export default GotYourBack

const Main = styled.div`
display:flex;
justify-content:center;
padding-top:35px;
background-color:black;
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
const MainHead=styled.div`
font-size:65px;
font-weight:1000;
text-align:start;
margin-top:20px;
color:white;
`
const Steps=styled.div`
display:flex;
justify-content:start;
margin-top:50px;
@media (min-width: 260px) and (max-width: 820px){
display:inline;
margin-top:30px;
}
`
const Step=styled.div`
margin-right:30px;
padding:10px;
@media (min-width: 260px) and (max-width: 820px){
padding-top:70px;
}
`
const Icon=styled.img`
height:30px;
width:30px;
float:left;
`
const Heading=styled.p`
font-size:30px;
color:white;
text-align:start;
`
const Desc=styled.p`
font-size:18px;
color:white;
text-align:start;
`