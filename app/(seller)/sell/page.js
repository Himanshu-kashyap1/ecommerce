import Yourprod from '@/components/Yourprod'
import React from 'react'

const Seller = async () => {

  const res = await fetch('http://localhost:3000/api/yourprod', {cache: 'no-store'})
  const data = await res.json();

  return (
    <div>
    <div className='h-20'/>
    <div className='h-0.5 bg-gray-500'/>
    <h1 className='text-xl font-bold text-center'>Seller Page</h1>
    <div className='h-0.5 bg-gray-500'/>
    <div className='mx-8 m-4'>
      <h2 className='text-lg font-semibold'>Your Products</h2>
      <Yourprod products={data}/>
    </div>
    </div>
  )
}

export default Seller