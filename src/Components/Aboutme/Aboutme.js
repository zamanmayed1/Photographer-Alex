import React from 'react';

const Aboutme = () => {
          return (
                    <div className='border p-5 md:w-2/4  mx-auto text-left mb-52 '>
                              <img className='rounded-full h-56 mx-auto' src="https://i.ibb.co/w0c8SNp/ROUND.png" alt="" />
                              <h1 className='text-2xl text-white font-bold text-center my-2'>Kamruzzaman Mayed</h1>
                              <div className="social w-1/4 grid grid-cols-4 mx-auto my-3">
                             <a href="https://www.facebook.com/zamanmayed/"> <img className='w-8 rounded-full' src="https://i.ibb.co/5Gfq8Bf/icons8-facebook-circled.gif" alt="" /></a>
                              <img className='w-8 rounded-full' src="https://i.ibb.co/WGRh8gD/icons8-twitter-circled.gif" alt="" />
                              <img className='w-8 rounded-full' src="https://i.ibb.co/Y2KCZjc/icons8-linkedin-2.gif" alt="" />
                              <img className='w-8 rounded-full' src="https://i.ibb.co/JmVS5Dq/icons8-youtube-logo.gif" alt="" />
                              </div>
                    <p className='text-[#6395A2] font-mono md:text-xl'>
                            My name is Kamruzzaman Mayed . I am a student of class XI . I am 17 years old . In future I want to be a full 
                            stack web-developer. I am also a student of Programming Hero - 'Complete Web Development Course With Jhankar Mahbub '
                            Web Course . In next 3-4 month, I have 2 dreams . 1st I want to complete  this Course Completly on flow . 
                            2nd I want to be at least Front end Web Developer .
                    </p>
          </div>
          );
};

export default Aboutme;