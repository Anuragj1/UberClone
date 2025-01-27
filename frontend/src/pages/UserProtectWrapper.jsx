import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../context/UserContext'; // Adjust this import based on your context file structure
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);
    const [ isloading, setIsLoading ] = useState(UserDataContext);

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return; 
        }

        const fetchUserProfile = async () => {
            setIsLoading(true); 
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/users/profile`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                if (response.status === 200) {
                    const data = response.data;
                    setUser(data.user);
                }
            } catch (error) {
                alert('Entered detail is Invalid, Please login again');
                console.log('Error:', error.message);
                navigate('/login');
            } finally {
                setIsLoading(false); // End loading state
            }
        };

        fetchUserProfile();
    }, [token, navigate, setUser, setIsLoading]);

    if (isloading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default UserProtectWrapper;
