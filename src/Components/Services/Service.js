import React from 'react';

const Service = ({service}) => {
          const {img , name , price , description} = service
          return (
                    <div className='service relative  p-3'>
                            <img className='w-full' src={img} alt="" />  
                            <h2 className='text-xl my-2 text-left text-white font-bold '>{name}</h2>
                            <h5 className='font-bold text-xl mb-2 text-white text-left'>Price: {price} BDT</h5>
                            <h6 className='text-left h-24 text-white'>{description.slice(0,150)}</h6>
                            <button className='md:w-2/4 mx-auto border font-bold border-orange-400  hover:text-orange-400 text-xl py-1   text-white px-2 mt-4'>Book Now</button>
                    </div>
          );
};

export default Service;