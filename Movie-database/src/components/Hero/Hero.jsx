import React from 'react'
import  MySvg from '../../assets/background.svg'

const hero = () => {
  return (
    <div className="bg-center h-screen"
          style={{
            backgroundImage: `url(${MySvg})`,
            backgroundSize: '150%', // Adjust this value to increase the size
            backgroundRepeat: 'no-repeat'
          }}
    >
      <div className='flex items-center justify-center h-full'>
        <h1 className='text-white'>Explore a world of films with our extensive collection.</h1>
      </div>
    </div>
  )
}

export default hero