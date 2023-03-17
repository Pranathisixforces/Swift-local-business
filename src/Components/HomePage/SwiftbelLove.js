import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/card1.png'
import img2 from '../../assets/card2.png'
import img3 from '../../assets/card3.png'
import img4 from '../../assets/card4.png'
import human from '../../assets/human.png'

function SwiftbelLove(){
const Carddetails=
[
{
'head':'Get more reviews',
'review':'We had 28 Google reviews…And now we’re over 600. And it’s easy for the staff',
'img':img1,
 'img2':human,
 'name':'Pura Vida Body and Mind Spa',
 'position':`Julie Davis,Owner`
},
{
'head':'Convert customers',
'review':`I'm getting 10x more website leads using Notifi's Webchat.`,
'img':img2,
'img2':human,
'name':'Ambiance Design Windows',
'position':`Dan Hawley, Owner`
},
{
'head':'Communicate faster',
'review':'We respond to texts, social posts, and emails from customers in 10 minutes.',
'img':img3,
'img2':human,
'name':'Lux Bond & Green',
'position':`Andrea Mascaro, Advertising Director`
},
{
'head':'Increase revenue',
'review':`In the last 12 months, we've generated $130,000 in revenue through the tool.`,
'img':img4,
'img2':human,
'name':'Genesis Dental',
'position':`Hillary Smedley,
VP of Operations`
}
]

return(
<Main>
    <Head>
        <div>
        <Headtext>Why 100,000+ businesses like yours love Notifi</Headtext>
        <Cards>
            {Carddetails?.map((x,index)=>{
                return(
           <Card>
           <Image src={x.img}/>
           <Title>{x.head}</Title>
           <Hr/>
           <Review>“{x.review}”</Review>
           <br/>
           <Section>
            <Profile src={x.img2}/>
            <div>
             <Name>{x.name}</Name>
             <Position>{x.position}</Position>
            </div>
            </Section>
          </Card>
                )
            })}

        </Cards>
        </div>
    </Head>
</Main>
)
}
export default SwiftbelLove

const Main = styled.div`
display:flex;
justify-content:center;
background-color:white;
padding-top:50px;
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
const Headtext=styled.h1`
text-align:center;
font-size:44px;
font-weight:800;
margin-bottom:30px;
@media (min-width: 260px) and (max-width: 820px){
   font-size:24px;
    }
`
const Cards=styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
@media (min-width: 260px) and (max-width: 820px){
    display:inline;
    }
`
const Image=styled.img`
border-radius:50%;
height:100px;
width:100px
`
const Profile=styled.img`
border-radius:50%;
height:60px;
width:60px;
margin-right:20px;
margin-top:15px;
`
const Card=styled.div`
border-radius:20px;
border:2px solid #eeecea;
padding:20px;
width:250px;
margin-right:30px;
@media (min-width: 260px) and (max-width: 1350px){
    width:260px;
    margin-bottom:30px;
    margin-left:30px;
    }
`
const Title=styled.h1`
font-weight: 600;
font-size: 24px;
color:#333;
`
const Hr=styled.hr`
margin-left:50px;
margin-right:50px;
border:1px solid #eeecea;
margin-top:15px;
margin-bottomn:15px;
`
const Review=styled.p`
font-weight: 300;
font-size: 18px;
text-align:start;
height:60px;
`
const Name=styled.p`
font-weight:700;
font-size:18px;
text-align:start;
`
const Position=styled.p`
font-weight:300;
color:#787878;
text-align:start;
margin-top:-8px;
`
const Section=styled.div`
display:flex;
`