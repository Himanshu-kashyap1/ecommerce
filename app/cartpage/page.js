import Cartitems from '@/components/Cartitems';
import React from 'react'

const Cartpage = async () => {

  return (
    <div className="mx-8">
      <div className="h-20"/>
      <div className="mt-4">
        <Cartitems/>
      </div>
    </div>
  );
}

export default Cartpage