import { useEffect, useState } from 'react';

export const useLoginFetch = url => {

    const [isLogin, setIsLogin] = useState(null)

    useEffect(() => {
        localStorage.getItem('token') ? setIsLogin(true) : setIsLogin(false);
    }, [url])

    return {isLogin, setIsLogin};
}

