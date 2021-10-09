import React from 'react';
import Footer from './Footer/Footer';
import TopBar from './Topbar/TopBar';

const Layout = (props) => {
    return (
        <div>
            <TopBar/>
            {
                props.children
            }
             <Footer/>
        </div>
    );
};

export default Layout;  