import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CaptainSignup = () => {

      const navigate = useNavigate();

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [vehicleColor, setVehicleColor] = useState('');
      const [vehiclePlate, setVehiclePlate] = useState('');
      const [vehicleCapacity, setVehicleCapacity] = useState('');
      const [vehicleType, setVehicleType] = useState('');

      const {captain, setCaptain} = useContext(CaptainDataContext);
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      }; 
    
      const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
      };
    
      const handleLastNameChange = (e) => {
        setLastName(e.target.value);
      };

      const handleVehicleColorChange = (e) => {
        setVehicleColor(e.target.value);
      };

      const handleVehiclePlateChange = (e) => {
        setVehiclePlate(e.target.value);
      };

      const handleVehicleCapacityChange = (e) => {
        setVehicleCapacity(e.target.value);
      };

      const handleVehicleTypeChange = (e) => {
        setVehicleType(e.target.value);
      };


    
      const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
          email: email,
          password: password,
          fullname: {
            firstname: firstName,
            lastname: lastName,
          },
          vehicle: {
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            vehicleType: vehicleType,
          },
        };

        try {
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
          if (response.status === 201) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
          }
        } catch (error) {
          if (error.response) {
            console.error('Error details:', error.response.data);
          } else {
            console.error('Error:', error.message);
          }
        }


        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');

      };

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://w7.pngwing.com/pngs/636/735/png-transparent-logo-uber-brand-design-text-logo-engineering-thumbnail.png"
          alt="Uber Logo"
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg w-full mb-2 font-medium">What's our Captain's name</h3>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <h3 className="text-lg mb-2 font-medium">What's our Captain's email?</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <h3 className="text-lg mb-2 font-medium">Enter password</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <h3 className="text-lg w-full mb-2 font-medium">Vehicle Information</h3>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee] w-1/2 rounded-lg   px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={handleVehicleColorChange}
              required
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={handleVehiclePlateChange}
              required
            />
          </div>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee] w-1/2 rounded-lg  px-4 py-2 border text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={handleVehicleCapacityChange}
              required
            />
            <select
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              value={vehicleType}
              onChange={handleVehicleTypeChange}
              required
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>



          <button
            type="submit"
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg"
          >
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          Already have an account?{' '}
          <Link to="/captain/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] mt-6 leading-tight">
            This site is reCAPTCHAand the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup
