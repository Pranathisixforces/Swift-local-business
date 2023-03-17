import React from "react";
import styled from "styled-components";
import GotYourBack from "../Components/Pricing/GotYourBack";
// import GrowBusiness from "../Components/Pricing/GrowBusiness";
import PriceBanner from "../Components/Pricing/PriceBanner";
import PricingCards from "../Components/Pricing/PricingCards";
import Questions from "../Components/Pricing/Questions";
import Reviews from "../Components/Pricing/Reviews";

function Pricing(){
return(
<Main>
<PriceBanner/>
<PricingCards/>
{/* <GrowBusiness/> */}
<GotYourBack/>
<Reviews/>
<Questions/>
</Main>
)
}
export default Pricing

const Main=styled.div`
overflow-x:hidden;
`
