import React from "react";
import { render } from "react-dom";

import Button from '../components/Button';
import Title from '../components/Title';
import Header from '../modules/Header';

class Home extends React.Component {

  onClickButton(){
    console.log('click');
  }
  render() {
    return (
      <div className="page">
        <Header />
        
        <Button children="Click me"/>
        <Button children="Click me blue" className="button-action--blue"/>
        <Title children="Title" />
        <Title children="Title" className="title--small"/>

      </div>
    );
  }
}

export default Home;
