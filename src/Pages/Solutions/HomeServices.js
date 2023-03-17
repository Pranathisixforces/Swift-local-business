import React from "react";
import styled from "styled-components";
import Banner from "../../Components/HomeServices/Banner";
import MobSaveTime from "../../Components/HomeServices/MobSaveTime";
import SaveTime from "../../Components/HomeServices/SaveTime";


function HomeServices(){
return(
<Main>
<Banner/>
<MobSaveTime/>
<SaveTime/>
</Main>
)
}
export default HomeServices

const Main=styled.div`
overflow-x:hidden;
`
