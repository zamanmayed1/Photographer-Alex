import React, { useEffect, useRef } from 'react';
import { useAuthState,  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.config';
import Socialsignin from '../Socialsignin/Socialsignin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [user]  = useAuthState(auth)
    const [signInWithEmailAndPassword, user2, loading, error] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef()
    const passwordref = useRef()
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
           
            let errorelement =<p className='text-red'>Wrong Login Details</p>
            toast(errorelement)   
           
            
    }
   

    // if (error) {
    //     let errorelement =<p className='text-red'>Wrong Login Details</p>
    //     toast(errorelement)
    // }
    const loginform = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordref.current.value
        signInWithEmailAndPassword(email, password)

    }



    return (
        <section className="flex justify-center items-center mb-64  bg-[#020305]">
            <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-5">

                <h2 className="text-xl font-bold text-white">Log in With You account</h2>

                <form onSubmit={loginform} >

                    <input ref={emailRef} className="w-full p-4 text-sm mb-6 bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="email" placeholder="Email"></input>


                    <input ref={passwordref} className="w-full p-4 text-sm mb-6 bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Password"></input>


                    <button type='submit' className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
                   
                </form>


                <Socialsignin />

                <h3 className='text-white text-left link'>I Dont Have Account .<Link to={'/signup'}> Register Now</Link></h3>
                <ToastContainer />
            </div>
           
        </section>
    );
};

export default Login;