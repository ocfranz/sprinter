import React from "react";

import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/breakpoints';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Grid from '../../components/Grid';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Code from '../../components/Code';

import ComponentContainer from '../../modules/ComponentContainer';

class Demo extends React.Component {

    onClickButton(){
        
    }
  render() {
    return (
        <div className="page">
            <Grid>
                <Title>Grid System</Title>
                <Container>
                    <span>Small</span>
                    <Row>
                        <Column sm={3} filled>
                            1
                        </Column>
                        <Column sm={3} filled>
                           2
                        </Column>
                        <Column sm={3} filled>
                            3
                        </Column>
                    </Row>
                </Container>
                
                <Title>Buttons</Title>
                <Container>
                    <Title small>Filled</Title>
                    <Row>
                        <Column sm={2} md={3} lg={3}>
                            <ComponentContainer>
                                <Button onClick={()=>this.onClickButton()} primary>Primary</Button> 
                                <Code>
                                    {`<Button primary>Primary</Button>`}
                                </Code>
                            </ComponentContainer>
                        </Column>
                        <Column sm={2} md={3} lg={3}>
                            <ComponentContainer>
                                <Button onClick={()=>this.onClickButton()} secondary>Secondary</Button>    
                                <Code>
                                    {`<Button secondary>Secondary</Button>`}
                                </Code>
                            </ComponentContainer>
                        </Column>
                        <Column sm={2} md={3} lg={3}>
                            <ComponentContainer>
                                <Button onClick={()=>this.onClickButton()} >Default</Button>   
                                <Code>
                                    {`<Button>Default</Button>`}
                                </Code>
                            </ComponentContainer>
                        </Column>
                    </Row>
                </Container>
                <Container>
                    <Title small>Outline</Title>
                    <Row>
                        <Column sm={2} md={3} lg={3}>
                            <ComponentContainer>
                                <Button onClick={()=>this.onClickButton()} outline primary>Primary</Button> 
                                <Code>
                                    {`<Button outline primary>Primary</Button>`}
                                </Code>
                            </ComponentContainer>
                        </Column>
                        <Column sm={2} md={3} lg={3}>
                            <ComponentContainer>
                                <Button onClick={()=>this.onClickButton()} outline secondary>Secondary</Button>    
                                <Code>
                                    {`<Button outline secondary>Secondary</Button>`}
                                </Code>
                            </ComponentContainer>
                        </Column>
                        <Column sm={2} md={3} lg={3}>
                            <ComponentContainer>
                                <Button onClick={()=>this.onClickButton()} outline>Default</Button>   
                                <Code>
                                    {`<Button outline>Default</Button>`}
                                </Code>
                            </ComponentContainer>
                        </Column>
                    </Row>
                </Container>
                
            </Grid>
        
            
        </div>
    );
  }
}

export default Demo;
