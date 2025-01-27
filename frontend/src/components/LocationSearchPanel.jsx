import React from 'react'

const LocationSearchPanel = (props) => {

    //sample array for location
    const locations = [
        "24B, Near Kapoor's cafe, Sheryians Codind School, Bhopal ",
        "27A, Near Singhaniya's cafe, Sheryians Codind School, Bhopal ",
        "20B, Near Sharma's cafe, Sheryians Codind School, Bhopal ",
        "26C, Near Mishra's cafe, Sheryians Codind School, Bhopal "
    ]

  return (
    <div> 
      {/* This is just a sample data */}

      {
        locations.map(function(elem, idx){
            return (
                <div key={idx} onClick={() => {
                    props.setVehiclePanelOpen(true)
                    props.setPanelOpen(false)
                }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                    <h2 className='bg-white h-8 w-12 flex items-center justify-center rounded-full'>
                        <i className="ri-map-pin-2-line "></i>
                    </h2>
                    <h4 className='font-medium'>
                        {elem}
                    </h4>
                 </div>
                )
            })
     }

    </div>
  )
}

export default LocationSearchPanel
