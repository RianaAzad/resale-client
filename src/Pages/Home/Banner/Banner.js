import React from 'react';
import banner from '../../../assets/banner.png'

const Banner = () => {
    return (
        <div className="hero my-16">
  <div className="hero-content flex-col lg:flex-row">
    <img src={banner} className="max-w-sm rounded-lg " alt=''/>
    <div>
      <h1 className="text-5xl font-bold">The Best Deals Ever!</h1>
      <p className="py-6">We provide the best cars of the city at affordable range. Buying a car is not a dream anymore. Choose your desired car and get free service along with 1 year of guarantee.</p>
    
    </div>
  </div>
</div>
    );
};

export default Banner;