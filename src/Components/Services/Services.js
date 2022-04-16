import React from 'react';
import Customlink from '../Customlink/Customlink';
import useDatas from '../hooks/useDatas';
import Service from './Service';

const Services = () => {
          const [services] = useDatas()
          
          return (
                    <div className='my-14 services md:px-10'>
                              <Customlink to={'/'}> Services</Customlink>  
                             <div className="grid mt-12 justify-center content-center gap-y-8 md:gap-20 md:grid-cols-3 ">
                                       
                             {
                                        services.map(service =><Service key={service.id} service={service}></Service> )
                              }
                             </div>
                    </div>
          );
};

export default Services;