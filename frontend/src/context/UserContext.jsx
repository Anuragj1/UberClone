import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null); 
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null); 

    const updateUser = (userData) => {
        setUser(userData);
    };

    // Context value
    const value = {
        user,
        setUser,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateUser,
    };

    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;
