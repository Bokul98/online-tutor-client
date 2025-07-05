import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/AuthContext';


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    // user === undefined হলে loading দেখান
    if (user === undefined) {
        return <div>Loading...</div>;
    }

    if (!user) {
        // Redirect to login page, preserving the current location
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;