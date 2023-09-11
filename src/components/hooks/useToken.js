import React, { useEffect, useState } from 'react';

const useToken = (email) => {
    
    const [token, setToken] = useState('');
    
    useEffect(() => {
        if(email){
            fetch(`https://dailyblogs-backend-server.onrender.com/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                // here we'll get the token from the server
                if(data.accessToken){
                    const token = data.accessToken;
                    localStorage.setItem('accessToken', token);
                    setToken(data.accessToken);
                }
            })
        }

    }, [email])
    
    return [token]
};

export default useToken;