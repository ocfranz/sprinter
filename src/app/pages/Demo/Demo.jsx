import React from "react";

import Button from '../../components/Button';
class Demo extends React.Component {

  onClickButton(){
    console.log('click');
  }
  render() {
    return (
      <div className="page">
        <a href="/home">Go to home</a>
        <Button children="Button"/>
      </div>
    );
  }
}

export default Demo;
