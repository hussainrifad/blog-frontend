import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    
    if(user) {return children}
    else {navigate('/login'); }
    
};

export default PrivateRoutes;