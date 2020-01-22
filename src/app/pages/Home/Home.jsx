import React from 'react';
import './Home.scss';

import Sidebar from '../../modules/Sidebar';
import NavHeader from '../../modules/NavHeader';
import Grid from '../../components/Grid';
import Header from '../../modules/Header';
const Home = ({className}) =>{

    return(
        <div className={`home-page ${className}`}>
            <Header />
           
        </div>
    )
}
export default Home;