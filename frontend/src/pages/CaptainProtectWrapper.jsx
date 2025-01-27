import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [ isloading, setIsLoading ] = useState(CaptainDataContext);

    useEffect(() => {
        if (!token) {
            navigate('/captain/login');
            return;
        }

        const fetchCaptainProfile = async () => {
            setIsLoading(true); // Start loading state
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/captains/profile`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                if (response.status === 200) {
                    const data = response.data;
                    setCaptain(data.captain);
                }
            } catch (error) {
                alert('Entered detail is Invalid, Please login again');
                console.log('Error:', error.message);
                navigate('/captain/login');
            } finally {
                setIsLoading(false); // End loading state
            }
        };

        fetchCaptainProfile();
    }, [token, navigate, setCaptain, setIsLoading]);

    if (isloading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default CaptainProtectWrapper;
