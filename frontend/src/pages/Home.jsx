import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const VehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [VehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingDriver, setWaitingDriver] = useState(false);

  useGSAP(() => {
    const timeline = gsap.timeline();

    if (panelOpen) {
      timeline
        .to(panelRef.current, { height: '70%', padding: 24, duration: 0.5 })
        .to(panelCloseRef.current, { opacity: 1, duration: 0.3 }, '-=0.3');
    } else {
      timeline
        .to(panelRef.current, { height: '0', padding: 0, duration: 0.5 })
        .to(panelCloseRef.current, { opacity: 0, duration: 0.3 }, '-=0.3');
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (VehiclePanelOpen) {
      gsap.to(VehiclePanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(VehiclePanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [VehiclePanelOpen]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingDriver) {
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [waitingDriver]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute top-5 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt="Uber Logo"
      />

      <div className="h-screen w-screen">
        <img
          src="https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 right-6 top-6 text-2xl cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find Trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-8 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a Pickup Location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              onClick={() => setPanelOpen(false)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>

        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      <div
        ref={VehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={WaitingForDriverRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <WaitingForDriver waitingDriver={waitingDriver}></WaitingForDriver>
      </div>
    </div>
  );
};

export default Home;
