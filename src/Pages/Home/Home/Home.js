import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='mx-5'>
            <Advertise></Advertise>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;