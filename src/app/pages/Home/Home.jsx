import React from 'react';
import Sidebar from '../../modules/Sidebar';
import './Home.scss';
const Home = ({className}) =>{

    return(
        <div className={`home-page ${className}`}>
            <div className="row home-page__container">
                <div className="col-3 home-page__sidebar">
                    <Sidebar  />
                </div>
                <div className="col-9 home-page__content">

                </div>
            </div>
        </div>
    )
}
export default Home;