import React, { useRef, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.config';
import Socialsignin from '../Socialsignin/Socialsignin';

const Signup = () => {
    const [user] = useAuthState(auth)
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const [passerror , setPassError] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()
    const signupform = e =>{
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirmpassword = confirmpasswordRef.current.value
        if (password === confirmpassword) {
            createUserWithEmailAndPassword(email , password)

        }
        else{
            setPassError('Password Not Match ⚠ ')
        }
        
    }

if (user) {
    navigate('/')
}
          return (
                    <section className="flex justify-center items-center  bg-[#020305] mb-16">
                    <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-5">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold text-white">Create An Account</h2>
                        </div>
                      <form onSubmit={signupform}>

                      
                            <input className="w-full p-4 mb-3 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Full Name"></input>
                       
                       
                      
                            <input ref={emailRef} className="w-full mb-3 p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="email" placeholder="Email"></input>
                        
                            <input ref={passwordRef} className="w-full p-4 mb-3 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Password" required></input>
                        
                            <input ref={confirmpasswordRef} className="w-full p-4 mb-3  text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Confirm Password" required></input>
                            <p className='my-2 text-red-500 text-left'>{passerror}  </p>
                        
                            <button type='submit' className="w-full py-4 mb-3 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
                     
                      </form>
                        
                                  <Socialsignin/>
                        <h3 className='text-white text-left link'>Already have an Account  <Link  to={'/login'}>Login Now</Link></h3>
                    </div>
                </section>
          );
};

export default Signup;