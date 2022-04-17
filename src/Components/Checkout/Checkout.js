import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.config';
import Socialsignin from '../Socialsignin/Socialsignin'

const Checkout = () => {
    const [user] = useAuthState(auth)
          return (
                    <section className="flex justify-center items-center mb-56  bg-[#020305]">
                    <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-5">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold text-white">Check Out</h2>
                        </div>
                        <div className='flex'>
                            <input className="w-full mr-2 p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Frist Name"></input>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Last Name"></input>
                        </div>
                       
                        <div>
                            <input className="w-full p-4 text-sm bg-blue-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="email" value={user?.email} readOnly></input>
                        </div>
                        <div>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Street Address (1) *" required></input>
                        </div>
                        <div>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Street Address (2) optional"></input>
                        </div>
                        <div>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Post Code"></input>
                        </div>
                        <div>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" value={'Bangladesh'}></input>
                        </div>
                        <div>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="number" placeholder='Phone Number' required></input>
                        </div>
                        
                        <div>
                            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">NEXT</button>
                        </div>
                        
                              
                        
                    </div>
                </section>
          );
};

export default Checkout;