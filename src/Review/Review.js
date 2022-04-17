import React from 'react';
import useDatas from '../Components/hooks/useDatas';
import Item from './Item';

const Review = () => {
          const [,reviews] = useDatas()
          return ( 
                    <div className='md:p-20 mb-12'>
                              <h1 className='text-3xl text-white text-center inline-block my-6  border-b border-blue-600' >Our Client Says</h1>
                    <div className='grid md:grid-cols-3 gap-7 md:p-10'>
                           {
                                     reviews.map(review => <Item review={review}></Item>)
                           }
                    </div>
                    </div>
          );
};

export default Review;