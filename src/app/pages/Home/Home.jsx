import React from 'react';
import './Home.scss';

import Sidebar from '../../modules/Sidebar';
import NavHeader from '../../modules/NavHeader';
const Home = ({className}) =>{

    return(
        <div className={`home-page ${className}`}>
            <div className="row home-page__container">
                <div className="col-2 home-page__sidebar">
                    <Sidebar  />
                </div>
                <div className="col-10 home-page__content">
                    <NavHeader />
                </div>
            </div>
        </div>
    )
}
export default Home;