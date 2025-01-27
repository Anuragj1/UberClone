import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          navigate('/captain/login'); // Redirect to captain login page
          return;
        }

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          localStorage.removeItem('token'); // Remove captain token
          navigate('/captain/login');
        }
      } catch (error) {
        console.error('Logout failed:', error);
        localStorage.removeItem('token'); // Ensure token removal on error
        navigate('/captain/login');
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default CaptainLogout;
