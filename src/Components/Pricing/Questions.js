import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion, AccordionSummary, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
function Questions(){
const [active,setActive]=useState(null)
const toggleAccordion = (num) => {
    if(active!==num){
    setActive(num)
    }
    else{
    setActive(null)
    }
  };
const questions=[
{
'question':'What is podium',
'ans':'Podium is a platform that allows local businesses to easily communicate with, market to, and collect payments from their customers.'
},
{
'question':'Why podium',
'ans':'Podium is a platform that allows local businesses to easily communicate with, market to, and collect payments from their customers.'
},
{
'question':'What happens if i hit my contacts limit',
'ans':'Podium is a platform that allows local businesses to easily communicate with, market to, and collect payments from their customers.'
},
{
'question':'What happens if I hit my campaigns reach limit?',
'ans':'Podium is a platform that allows local businesses to easily communicate with, market to, and collect payments from their customers.'
},
{
'question':'Does Podium have a limit for how many marketing texts (i.e. campaigns) I can send?',
'ans':'Podium is a platform that allows local businesses to easily communicate with, market to, and collect payments from their customers.'
},
{
'question':'How does “Campaign Reach” replace my marketing contacts or subscribers?',
'ans':'Podium is a platform that allows local businesses to easily communicate with, market to, and collect payments from their customers.'
},
]
return(
<Main>
    <Head>
<MainHead>Frequently asked questions</MainHead>
<br/>
<br/>
{questions?.map((x,index)=>{
return(
<Accorddiv key={index}>
<Questiondiv expanded={active===index?true:false} onChange={()=>toggleAccordion(index)} square elevation={0}>
      <AccordionSummary
        expandIcon={active===index? <Remove style={{ color: 'blue' }} /> : <Add  style={{ color: 'blue' }}/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <TextHead><strong>{x.question}</strong></TextHead>
      </AccordionSummary>
      <Ans>
        {x.ans}
      </Ans>
    </Questiondiv>
    </Accorddiv>
)
})}

    </Head>
</Main>
)
}
export default Questions


const Main = styled.div`
display:flex;
justify-content:center;
padding-top:65px;
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
font-size:35px;
font-weight:1000;
text-align:center;
margin-top:20px;
`
const Questiondiv=styled(Accordion)`
width:800px;
border-bottom:1px solid #F3F3F3;
border-top:1px solid #F3F3F3;
border-radius:0px;
`
const Accorddiv=styled.div`
display:flex;
justify-content:center;
`
const TextHead=styled(Typography)`
font-weight:800;
font-size:16px;
text-align:start;
`
const Ans=styled(Typography)`
font-size:16px;
padding-bottom:30px;
text-align:start;
padding-left:30px;
`
