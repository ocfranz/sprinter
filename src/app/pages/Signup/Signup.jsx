import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
const Signup = ({}) => {
    const [ validUsername , setValidUsername ] = useState(true);
    const [ validUseremail , setValidUseremail ] = useState(true);
    const [ user , setUser ] = useState({}); 

    const handleInputChange = (event) => {
        const { target } = event;
        switch(target.id){
            case 'username':
                axios.post('/user/check-name', { attribute : "username", username : target.value})
                .then( response => {
                    const { valid } = response.data;
                    if(valid ){
                        setUser({ ...user, username : target.value}); 
                        setValidUsername(true);
                    }else{
                        setValidUsername(false);
                    }
                })
                .catch( err => console.log(err));
                break;
            case 'email':
                axios.post('/user/check-name', { attribute : "email", email : target.value})
                .then( response => {
                    const { valid } = response.data;
                    if(valid ){
                        setUser({ ...user, email : target.value}) 
                        setValidUseremail(true);
                    }else{
                        setValidUseremail(false);
                    }
                })
                .catch( err => console.log(err));
                break;
            case 'password':
                setUser({ ...user, password : target.value})
                break;
            case 'name':
                setUser({ ...user, name : target.value})
                break;
            default :
                throw new Error('Error input types on signup');
        }
    }
    const handleOnSubmitClick = ()=>{
        axios.post('/user/signup', user)
            .then( respose => console.log(respose))
            .catch( err => console.log(err));
    }
    return(
        <div>
            <Title>Sign up</Title>
            <div style={{ width : '30%', margin : "auto auto"}}>
                <label htmlFor="">Username</label>
                <Input id="username" type="text" onChange={(e)=>handleInputChange(e)} valid={validUsername}></Input>
                <label htmlFor="">Email</label>
                <Input id="email" type="email" onChange={(e)=>handleInputChange(e)} valid={validUseremail}></Input>
                <label htmlFor="">password</label>
                <Input id="password" type="password" onChange={(e)=>handleInputChange(e)}></Input>
                <label htmlFor="">Name</label>
                <Input id="name" type="text" onChange={(e)=>handleInputChange(e)}></Input>
                <Button primary onClick={()=>handleOnSubmitClick()}>Signup</Button>
            </div>
        </div>
    );
}

export default Signup;