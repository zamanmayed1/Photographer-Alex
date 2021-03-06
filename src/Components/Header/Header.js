import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.config';
import Customlink from '../Customlink/Customlink';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='md:px-16 text-white p-3 md:flex  justify-between sticky top-0 z-10 bg-[#010204] mb-5 '>
            <div className="logo md:w-2/4 flex justify-center md:justify-start items-center">
                <Link to={'/'}><img className='md:w-16 w-16  mr-2' src="https://i.ibb.co/NpHgGqx/360-F-107412855-Xkco-Cs-P9-C9-Lx-Coxpj-JBXymuv72-UFu-LRI.jpg" alt="" /> </Link>
                <h3 className='text-2xl font-mono font-bold text-white'>Photographer-Alex</h3>
            </div>
            <div className="nav flex  md:w-2/4 md:justify-end  items-center justify-center font-bold">
                <Customlink to={'/'} >Home</Customlink>
             
                <Customlink to={'/blogs'} >Blogs</Customlink>
                <Customlink to={'/aboutme'} >About Me</Customlink>
                {
                  !user?.email ?   <Customlink to={'/login'} >Log In</Customlink> : <button onClick={()=>signOut(auth)} className='text-white font-bold bg-slate-800 p-2 rounded-lg'>Sign Out</button>
              }



            </div>
        </div>
    );
};

export default Header;