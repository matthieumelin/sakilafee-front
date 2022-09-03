import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Router } from '../router/Router';

export default function Account() {
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.token);

    useEffect(() => {
        if (!token) navigate(Router.Login);
    }, []);
    
    return (
        <div>Account</div>
    )
}
