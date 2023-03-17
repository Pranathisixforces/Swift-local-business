import React from "react";
import styled from "styled-components";
import Banner from "../Components/HomePage/Banner";
import GetStarted from "../Components/HomePage/GetStarted";
import LocalMarketing from "../Components/HomePage/LocalMarketing";
import MobileLocalMarketing from "../Components/HomePage/MobileLocalMarketing";
import SwiftbelLove from "../Components/HomePage/SwiftbelLove";


function HomePage(){
return(
    <Main>
    <Banner/>
    <SwiftbelLove/>
    <LocalMarketing/>
    <MobileLocalMarketing/>
    <GetStarted/>
    </Main>
)
}
export default HomePage

const Main=styled.div`
overflow-x:hidden;
`