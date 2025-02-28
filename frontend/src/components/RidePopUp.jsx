import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
      <h5
          className="p-1 text-center w-[93%] absolute top-0"
          onClick={() => {
            props.setRidePopupPanel(false)
          }}
        >
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>

        <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
            <div className='flex items-center gap-3'>
                <img className='h-12 w-12 rounded-full object-cover'  src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                <h2 className='text-lg font-medium'>Harsh Patel</h2>
            </div>
            <h5 className='text-lg font-semibold '>5.5 KM</h5>
        </div>

        <div className='flex gap-2 justify-between flex-col items-center'>
            {/* <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" 
            /> */}
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm  text-gray-600 -mt-1'>Kankariya Talab, Ahemdabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm  text-gray-600 -mt-1'>Kankariya Talab, Ahemdabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 '>
                    <i className="ri-currency-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'> ₹193.20</h3>
                        <p className='text-sm  text-gray-600 -mt-1'>Cash</p>
                    </div>
                </div>
            </div>
            <button onClick={() =>{

            }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm Ride</button>

            <button onClick={() =>{
                props.setRidePopupPanel(false)
            }} className='w-full mt-1 bg-gray-200 text-gray-700 font-semibold p-2 rounded-lg'>Ignore</button>


        </div>
    </div>
  )
}

export default RidePopUp
