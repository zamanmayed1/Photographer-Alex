import React from 'react';
import { Link } from 'react-router-dom';
import Socialsignin from '../Socialsignin/Socialsignin';

const Login = () => {
          return (
                    <section className="flex justify-center items-center mb-64  bg-[#020305]">
    <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-5">
        <div className="mb-4">
            <h2 className="text-xl font-bold text-white">Log in With You account</h2>
        </div>
        <div>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Email"></input>
        </div>
        <div>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Password"></input>
        </div>
        <div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
        </div>
        
                  <Socialsignin/>
        <h3 className='text-white text-left link'>I Dont Have Account .<Link  to={'/signup'}> Register Now</Link></h3>
    </div>
</section>
          );
};

export default Login;