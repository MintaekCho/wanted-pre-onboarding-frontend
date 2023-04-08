import React from 'react';
import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export const TokenContext = createContext();

export default function Root() {

    const token = localStorage.getItem('token')
    return (
        <TokenContext.Provider value={token}>
            <Header />
            <Outlet />
        </TokenContext.Provider>
    );
}

