import React from "react";

import Button from '../../components/Button';

import { colors } from '../../styles/colors';
class Demo extends React.Component {

  onClickButton(){
    console.log('click');
  }
  render() {
    return (
      <div className="page">
        <Button onClick={()=>this.onClickButton()} fill={colors.secondary}>Hello</Button> 
        <Button onClick={()=>this.onClickButton()}>Hello</Button>    
        <Button onClick={()=>this.onClickButton()} primary>Hello</Button>   
            
      </div>
    );
  }
}

export default Demo;
