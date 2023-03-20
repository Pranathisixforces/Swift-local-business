import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../../assets/notifilogo.png';
import { loginUsers } from '../../store/Actions/Auth.action';
import { useDispatch } from 'react-redux';

function Auth(){
const [customtext,setCustomtext]=useState('Next')
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const [isValid, setisvalid] = useState();
const [ispassValid, setispassvalid] = useState();
const [errormsg,setErrormsg]=useState(null)
let dispatch=useDispatch();
 const handlelogin=async()=>{
    //let reg =  /^([\w\.-]+@[\w\.-]+(\.[\w]+)*)|(\d{3}-\d{3}-\d{4})$/;
    setErrormsg(null)
    let reg = /^(\+?1[-. ]?)?\(?[2-9][0-8][0-9]\)?[-. ]?[2-9][0-9]{2}[-. ]?[0-9]{4}$|^[\w+.]+@\w+\.\w+$/;
    if(reg.test(email)){
   setisvalid(true)
   setCustomtext('Sign in')
   }
 else{
    setisvalid(false)
    setCustomtext('Next')
    }
   !(password.length>7)? setispassvalid(false):setispassvalid(true)
   if(isValid&&ispassValid===true){
    const res = await dispatch(loginUsers({
        "email":email,
        "password":password
        }))
        if(res?.status===false){
        setErrormsg(res?.meesage)
        }
    return res
    }
}

console.log(isValid,'isss')
const onChangeEmail = (e) => {
    let reg = /^(\+?1[-. ]?)?\(?[2-9][0-8][0-9]\)?[-. ]?[2-9][0-9]{2}[-. ]?[0-9]{4}$|^[\w+.]+@\w+\.\w+$/;
    if(reg.test(e.target.value)){setisvalid(true)}
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
<Image src={logo} alt='logo' />
{isValid === false ? <p className='errormsg'>
Incorrect email or mobile number. Please try again!
</p> :
isValid === false||ispassValid===false ? <p className='errormsg'>
Incorrect email or password. Please try again!
</p>
:
errormsg?
<p className='errormsg'>
{errormsg}
</p>
:
null}
<br/>
<Inputbox id="outlined-basic" label="Email or mobile number" variant="outlined" onChange={(e) => onChangeEmail(e)} required error={isValid!==false?false:true} />
<br/>
{customtext==='Sign in'?
<Inputbox id="outlined-basic" label="Password" variant="outlined" type={'password'} required onChange={(e) => onChangePassword(e)} error={ispassValid!==false?false:true} />
:''}
<br/>
<CustomButton variant="contained" onClick={()=>handlelogin()}>{customtext}</CustomButton>
{/* <Haveaccount><a href='/'>Forgot Password ?</a></Haveaccount> */}
</Left>
)
}
export default Auth

const Left =styled.div`
margin-top:150px;
`
const Image=styled.img`
width:13%;
margin-bottom:60px;
`
const Inputbox=styled(TextField)`
width:30%;
border-radius:12px;
height:80px;
`
const CustomButton=styled(Button)`
width:30%;
height:44px;
`
// const Haveaccount=styled.p`
// margin-left:70px;
// margin-top:40px;
// `