import React from 'react';
import { useSignInWithGoogle , useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.config'


const Socialsignin = () => {
          const [user] = useAuthState(auth);

          const [signInWithGoogle] = useSignInWithGoogle(auth);

          return (
                    <div>
                              <div className='flex w-3/4 mx-auto items-center'>
                                        <div className='border-t w-2/4'></div>
                                        <p className='text-white mx-4'>or</p>
                                        <div className='border-t w-2/4'></div>
                              </div>
                             <button onClick={()=>signInWithGoogle()} className='flex mx-auto border items-center font-bold border-orange-400  hover:text-orange-400 py-1   text-white px-2 mt-4'><img className='w-8 mr-2' src="https://i.ibb.co/G5XJbwq/google.png" alt="" /> Continue With Google</button> 
                    </div>
          );
};

export default Socialsignin;