import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/InputForm';

export default function SignUp() {

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate('/todo')
        } 
    })
    return (
        <InputForm type={'signup'} />
    );
}

