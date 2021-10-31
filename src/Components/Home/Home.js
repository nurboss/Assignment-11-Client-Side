import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import SuccessStory from './OurSuccessStory/SuccessStory';
import Services from './Services/Services';
import WhyCourierHero from './WhyCourierHero/WhyCourierHero';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyCourierHero></WhyCourierHero>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;