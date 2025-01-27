import React from 'react'
import { Link } from 'react-router-dom';

const CaptainHome = () => {
  return (
    <div className='h-screen'>
       <div className='fixed  p-4 top-0 flex items-center justify-between w-screen'>
          <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
          <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-home-5-line"></i>
          </Link>
       </div>

      <div className='h-1/2'>
        <img
          src="https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif"
          alt=""
          className="h-full w-full object-cover"
        />  
      </div>

      <div className='h-1/2 p-4'>

      </div>
      
    </div>
  )
}

export default CaptainHome
