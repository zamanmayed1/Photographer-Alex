import React from 'react';
import Review from '../../Review/Review';
import Services from '../Services/Services';
import Topbanner from '../Topbanner/Topbanner';

const Home = () => {
          return (
                    <div >
                          <Topbanner/>  
                          <Services/>  
                          <Review/>
                         
                    </div>
          );
};

export default Home;