import React from 'react';
import { Link } from 'react-router-dom';
import Socialsignin from '../Socialsignin/Socialsignin';

const Signup = () => {
          return (
                    <section className="flex justify-center items-center  bg-[#020305]">
                    <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-5">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold text-white">Create An Account</h2>
                        </div>
                        <div>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Full Name"></input>
                        </div>
                       
                        <div>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="email" placeholder="Email"></input>
                        </div>
                        <div>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Password"></input>
                        </div>
                        <div>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Confirm Password"></input>
                        </div>
                        <div>
                            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
                        </div>
                        
                                  <Socialsignin/>
                        <h3 className='text-white text-left link'>Already have an Account  <Link  to={'/login'}>Login Now</Link></h3>
                    </div>
                </section>
          );
};

export default Signup;