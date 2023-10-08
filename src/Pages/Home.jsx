import React from 'react';
import Banner from '../Component/Header/Banner';
import Service from '../Component/Service/Service';
import Footer from '../Component/Footer/Footer';
import Packages from '../Component/Packaging/Packages';
import Members from '../Component/Team Member/Members';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Packages></Packages>
            <Members></Members>
            <Footer></Footer>

        </div>
    );
};

export default Home;