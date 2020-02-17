import React from "react";

import { colors } from '../../styles/colors';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Grid from '../../components/Grid';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Column from '../../components/Column';

class Demo extends React.Component {

    onClickButton(){
        
    }
  render() {
    return (
        <div className="page">
            <Grid>
                <Title>Buttons</Title>
                <Container>
                    <Title small>Filled</Title>
                    <Row>
                        <Column sm={2} md={3} lg={4}>
                            <Button onClick={()=>this.onClickButton()} primary>Primary</Button> 
                            <span>${'<Button onClick={()=>this.onClickButton()} primary>Primary</Button>'}</span>
                        </Column>
                    </Row>
                    
                    
                    <Button onClick={()=>this.onClickButton()} secondary>Secondary</Button>    
                    <Button onClick={()=>this.onClickButton()} >Default</Button>   
                </Container>
                <Container>
                    <Title small>Filled</Title>
                    <Button onClick={()=>this.onClickButton()} outline>Primary</Button> 
                    <Button onClick={()=>this.onClickButton()} secondary>Secondary</Button>    
                    <Button onClick={()=>this.onClickButton()} >Default</Button>   
                </Container>
                
            </Grid>
        
            
        </div>
    );
  }
}

export default Demo;
