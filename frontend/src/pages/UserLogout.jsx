import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.warn('No token found in localStorage. Redirecting to login.');
          navigate('/login');
          return;
        }

        const apiUrl = `${import.meta.env.VITE_BASE_URL}/users/logout`;
        console.log('Sending logout request to:', apiUrl);

        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          console.log('Logout successful:', response.data);
          localStorage.removeItem('token');
          navigate('/login');
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.warn('Unauthorized: Token is invalid or expired.');
        } else {
          console.error('Unexpected logout error:', error);
        }
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default UserLogout;
