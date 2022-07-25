import React from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';

export default function index() {
  return (
    <div className='bg-gray-900'>
      <div className='mx-auto max-w-screen-2xl'>
        {/* <div className='sticky inset-0'> */}
          <Header />
        {/* </div> */}
        <Hero />
      </div>
    </div>
  )
}
