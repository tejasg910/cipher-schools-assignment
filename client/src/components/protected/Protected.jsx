import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ isAuthenticated, children }) => {
    console.log(isAuthenticated)
    if (!isAuthenticated) {
        return <Navigate to={'/login'} />
    }
    return children;
}

export default Protected