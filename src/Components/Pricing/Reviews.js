import React from 'react'
import styled from 'styled-components'
import dummyprofile from '../../assets/dummyprofile.webp'
function Reviews(){
return(
<Main>
    <Head>
<Card>
<Reviewtext>
“The combination of higher demand and less staff made it so we weren’t able to answer every single phone call...Sending text messages is much faster than getting on the phone with every single person that wants to chat.”
</Reviewtext>
<br/>
<Profiledetails>
<div>
<ProfileImage src={dummyprofile}/>
</div>
<div>
<Name>Kara Weed</Name>
<Company>Ultra Modern Pool & Patio</Company>
</div>
</Profiledetails>
</Card>
<Card>
<Reviewtext>
“The combination of higher demand and less staff made it so we weren’t able to answer every single phone call...Sending text messages is much faster than getting on the phone with every single person that wants to chat.”
</Reviewtext>
<br/>
<Profiledetails>
<div>
<ProfileImage src={dummyprofile}/>
</div>
<div>
<Name>Kara Weed</Name>
<Company>Ultra Modern Pool & Patio</Company>
</div>
</Profiledetails>
</Card>
    </Head>
</Main>
)
}
export default Reviews


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
justify-content:center
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;
}
@media (min-width: 260px) and (max-width: 820px){
    display:inline;
    }
`
const Card=styled.div`
border: 2px solid #eeecea;
width:550px;
background:white;
color:black;
border-radius:25px;
margin-right:50px;
padding:30px;
@media (min-width: 260px) and (max-width: 820px){
    width:300px;
    margin-left:50px;
    margin-bottom:30px;
    }
`
const Reviewtext=styled.p`
font-size:22px;
text-align:start;
`
const Profiledetails=styled.div`
display:flex;
margin-left:-10px;
`
const Name=styled.p`
font-weight:900;
font-size:16px;
text-align:start;
margin-top:-5px;
`
const Company=styled.p`
font-size:16px;
color:gray;
text-align:start;
margin-top:-7px;
`
const ProfileImage=styled.img`
border-radius:50%;
width:50%;
height:85%;
margin-top:-8px;
`