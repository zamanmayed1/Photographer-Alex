import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.config";
import Customlink from "../Customlink/Customlink";

const Footer = () => {
          const [user] = useAuthState(auth)
          return (
                    <div className=' w-full footer px-6 md:px-32 bg-[#020305] h-auto  text-white py-11 '>
                              <div className=' md:grid md:grid-cols-2  '>
                                        <div className='w-full text-left'>
                                                  <div className="logo md:w-2/4 flex justify-center md:justify-start items-center">
                                                            <Link to={'/'}><img className='md:w-16 w-16  mr-2' src="https://i.ibb.co/NpHgGqx/360-F-107412855-Xkco-Cs-P9-C9-Lx-Coxpj-JBXymuv72-UFu-LRI.jpg" alt="" /> </Link>
                                                            <h3 className='text-xl w-full font-mono font-bold text-white'>Photographer-Alex</h3>

                                                  </div>
                                                  <h1 className='md:col-span-2'> Copyright by @Zaman Mayed</h1>
                                        </div>
                                        <div className=' my-4  md:w-full'>
                                                  <Customlink to={'/'}>Home</Customlink>
                                                  <Customlink to={'/blogs'}>Blogs</Customlink>
                                                  <Customlink to={'/aboutme'}>About Me</Customlink>
                                                  {
                                                            !user?.email && <>
                                                                      <Customlink to={'/signup'}>Sign Up</Customlink>
                                                                      <Customlink to={'/login'}>Login</Customlink>
                                                            </>
                                                  }


                                        </div>


                              </div>

                    </div>
          );
};

export default Footer;