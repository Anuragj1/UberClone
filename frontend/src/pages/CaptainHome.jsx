import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import CaptainDetail from '../components/CaptainDetail';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainHome = () => {

    const [ridePopupPanel, setRidePopupPanel] = useState(true)
    const ridePopupPanelRef = useRef(null)

    useGSAP(() => {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: 'translateY(0)',
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: 'translateY(100%)',
        });
      }
    }, [ridePopupPanel]);



  return (
    <div className='h-screen'>
       <div className='fixed  p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
          <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-home-5-line"></i>
          </Link>
       </div>

      <div className='h-3/5'>
        <img
          src="https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif"
          alt=""
          className="h-full w-full object-cover"
        />  
      </div>

      <div className='h-2/5 p-6'>
        <CaptainDetail />
      </div>

      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <RidePopUp setRidePopupPanel={setRidePopupPanel} />
      </div>

    </div>
  )
}

export default CaptainHome
