import React, { useState } from 'react';
import styled from 'styled-components';

import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
const Login = ({})=>{
    
    const [ user , setUser ] = useState({}); 

    const handleInputChange = (event) => {
        const { target } = event;
        switch(target.id){
            case 'username':
                setUser({ ...user, username : target.value})
                break;
            case 'password':
                setUser({ ...user, password : target.value})
                break;
            default :
                throw new Error('Error input types on login');
        }
    }
    const handleOnLoginClick = ()=>{
        axios.post('/user/login', user)
            .then( respose => console.log(respose))
            .catch( err => console.log(err));
    }
    return(
        <div>
            <Title>Login</Title>
            <div style={{ width : '30%', margin : "auto auto"}}>
                <label htmlFor="">Username</label>
                <Input id="username" type="text" onChange={(e)=>handleInputChange(e)} ></Input>
                <label htmlFor="">password</label>
                <Input id="password" type="password" onChange={(e)=>handleInputChange(e)}></Input>
                <Button primary onClick={()=>handleOnLoginClick()}>Login</Button>
            </div>
        </div>
    );
}

export default Login;