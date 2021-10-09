import React from 'react';
import Layout from '../Layout/Layout';
import Header from './Header/Header';
import Benner from '../Banner/Benner';
import ServiceCard from '../Common/ServiceCard/ServiceCard';
import ExperienceSec from '../Common/ExperienceSec/ExperienceSec';
import WhoWeAreSec from '../Common/WhoWeAreSec/WhoWeAreSec';
const Home = () => {
    return (
        <div>
            <Layout>
                <Header/>
                {/* <Benner /> */}
                <ServiceCard/>
                <ExperienceSec/>
                <WhoWeAreSec/>
            </Layout>
        </div>
    );
};

export default Home;