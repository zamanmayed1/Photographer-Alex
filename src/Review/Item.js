import React from 'react';

const Item = ({review}) => {
          const {name,text,img} = review
          return (
                    <div className="bg-[#172A46] rounded-lg  p-2  ">
                   <img className='h-2/4 mx-auto' src={img} alt="" />
                   
                              <h4 className="text-xl text-white text-center font-semibold">{name}</h4>
                              <p className="text-sm text-white ">"{text}"</p>
                    
          </div>
          );
};

export default Item;