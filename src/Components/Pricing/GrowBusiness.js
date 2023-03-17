import React from "react";
import styled from "styled-components";
import business1 from '../../assets/business1.webp'
import business2 from '../../assets/business2.webp'
import business3 from '../../assets/business3.webp'
import business4 from '../../assets/business4.webp'
import business5 from '../../assets/business5.webp'

function GrowBusiness(){
return(
<Main>
<Head>
<Headtext>Over 100k businesses grow with Notifi.</Headtext>
<Businesses>
<Image src={business1}/>
<Image src={business2}/>
<Image src={business3}/>
<Image src={business4}/>
<Image src={business5}/>
</Businesses>
</Head>
</Main>
)
}

export default GrowBusiness

const Main = styled.div`
display:flex;
position:relative;
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
font-size:58px;
font-weight:900;
margin-bottom:30px;
width:100%;
`
const Businesses=styled.div`
display:flex;
justify-content:space-between;
margin-left:50px;
margin-right:50px;
`
const Image =styled.img`
width:100px;
height:50px;
`