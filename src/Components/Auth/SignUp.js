import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/Actions/Auth.action';


function SignUp(){
let dispatch=useDispatch()
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isValid, setisvalid] = useState();
const [ispassValid, setispassvalid] = useState();
const [errormsg,setErrormsg]=useState(null)

const handlesubmit=async()=>{
    setErrormsg(null)
    let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
    reg.test(email) ? setisvalid(true) : setisvalid(false)
password.length>7 ? setispassvalid(true):setispassvalid(false)
if(isValid&&ispassValid===true){
const res = await dispatch(registerUser({
    "email":email,
    "password":password
    }))
    if(res?.status===false){
        setErrormsg(res?.meesage)
        }
return res
}
}
const onChangeEmail = (e) => {
    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    // reg.test(e.target.value) ? setisvalid(true):setisvalid(false)
    setEmail(e.target.value)
}
const onChangePassword = (e) => {
    if(e.target.value.length>7){
        setispassvalid(true)
        }
    setPassword(e.target.value)
}
return(
<Left>
<Heading>Give Notifi a try. It’s free.</Heading>
<Desc>Grow with tools for texting customers, getting reviews, and making sales. No credit card required.</Desc>
{isValid === false||ispassValid===false ? <p className='errormsg'>
Incorrect email or password. Please try again!
</p> :
errormsg?
<p className='errormsg'>
{errormsg}
</p>
:null}
<br/>
<Inputbox id="outlined-basic" label="Email" variant="outlined" onChange={(e) => onChangeEmail(e)} required error={isValid!==false?false:true}/>
<br/>
<Inputbox id="outlined-basic" label="Create a password" variant="outlined" type={'password'} required onChange={(e) => onChangePassword(e)} error={ispassValid!==false?false:true}/>
<Desc2>By continuing, you agree that you have read and accept the Podium <a href='/'>Terms of Service</a> and <a href='/'>Privacy Policy</a>.</Desc2>
<br/>
<CustomButton variant="contained" onClick={()=>handlesubmit()}>Start 14-day free trial</CustomButton>
<Haveaccount>Already have an account? <a href='/login'>Log in</a></Haveaccount>
</Left>
)
}

export default SignUp

const Left =styled.div`
width:600px;
padding-left:200px;
display:flex;
flex-direction:column;
justify-content:center;
`
const Heading=styled.p`
text-align:start;
font-weight:600;
font-size:24px;
`
const Desc=styled.p`
text-align:start;
font-weight:400;
font-size:16px;
width:64%;
margin-top:-6px;
`
const Desc2=styled.p`
text-align:start;
font-weight:400;
font-size:14px;
width:67%;
color:gray;
margin-top:30px;
`
const Inputbox=styled(TextField)`
width:66%;
border-radius:12px;
`
const CustomButton=styled(Button)`
width:66%;
height:44px;
`
const Haveaccount=styled.p`
margin-left:70px;
margin-top:40px;
`