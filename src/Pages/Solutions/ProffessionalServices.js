import React from "react";
import styled from "styled-components";
import Banner from "../../Components/ProffessionalServices/Banner";
import MobSaveTime from "../../Components/ProffessionalServices/MobSaveTime";
import SaveTime from "../../Components/ProffessionalServices/SaveTime";


function ProffessionalServices(){
return(
<Main>
<Banner/>
<MobSaveTime/>
<SaveTime/>
</Main>
)
}
export default ProffessionalServices

const Main=styled.div`
overflow-x:hidden;
`
