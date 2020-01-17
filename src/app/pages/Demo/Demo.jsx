import React from "react";

import Button from '../../components/Button';
import Title from '../../components/Title';
import Header from '../../modules/Header';

class Demo extends React.Component {

  onClickButton(){
    console.log('click');
  }
  render() {
    return (
      <div className="page">
        <a href="/home">Go to home</a>
        <Header />
        
        <Button children="Click me"/>
        <Button children="Click me blue" className="button-action--blue"/>
        <Title children="Title" />
        <Title children="Title" className="title--small"/>

      </div>
    );
  }
}

export default Demo;
