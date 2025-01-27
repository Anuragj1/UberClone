import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const Captainlogin = () => {
     const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const {captain, setCaptain} = useContext(CaptainDataContext);
      const navigate = useNavigate();
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const submitHandler = async (e) => {
        e.preventDefault();

        const captain ={
            email: email,
            password: password
        }

        try{
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
          if(response.status === 200){
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
          } 
        }catch (error) {
          if (error.response) {
            console.error('Error details:', error.response.data);
          } else {
            console.error('Error:', error.message);
          }
        }

        setEmail('')
        setPassword('')
        
      };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://w7.pngwing.com/pngs/636/735/png-transparent-logo-uber-brand-design-text-logo-engineering-thumbnail.png"
          alt="Uber Logo"
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg mb-2 font-medium">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Email"
          />
          <h3 className="text-lg mb-2 font-medium">Enter password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          Jion a fleet?{' '}
          <Link to="/captain-signup" className="text-blue-600">
          Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link to='/login' className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as User
        </Link>
      </div> 
    </div>
  )
}

export default Captainlogin
