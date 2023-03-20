
import NetworkOps from "../../services/NetworkOps";
import { ServiceEnum } from "../../services/Urls";


export const registerUser=(data)=>async (dispatch,getstate)=>{
    const res=await NetworkOps.post(ServiceEnum.register,data)
    console.log(res,'ress')
        if(res.status===true)
        {
        localStorage.setItem('token', res?.token)
        dispatch({
            type: 'USERID',
            payload:res?.data
          })
        }
    return res
}

export const loginUsers=(data)=>async (dispatch,getstate)=>{
    const res=await NetworkOps.post(ServiceEnum.loginUser,data)
    if(res.status===true)
        {
            dispatch({
                type: 'LOGIN_TOKEN',
                payload: res?.token
            })
        }
return res
}
