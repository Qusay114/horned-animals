import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

class Main extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            imageSrc:data.imageSrcArray ,    
            title:data.title,
            description: data.description,
            name:data.name,
            horns:data.horns,
        }
    }
    render()
    {
        
        return(
        <div id='container'>
            
            <Container>
                <Row>
                    <Col><HornedBeast name={this.state.name[0]} description={this.state.description[0]} imageSrc={this.state.imageSrc[0]} title={this.state.title[0]} horns={this.state.horns[0]} /></Col>
                    <Col><HornedBeast name={this.state.name[1]} description={this.state.description[1]} imageSrc={this.state.imageSrc[1]} title={this.state.title[1]} horns={this.state.horns[1]} /></Col>
                    <Col><HornedBeast name={this.state.name[2]} description={this.state.description[2]} imageSrc={this.state.imageSrc[2]} title={this.state.title[2]} horns={this.state.horns[2]} /></Col>
                </Row>
                <Row>
                    <Col><HornedBeast name={this.state.name[3]} description={this.state.description[3]} imageSrc={this.state.imageSrc[3]} title={this.state.title[3]} horns={this.state.horns[3]} /></Col>
                    <Col><HornedBeast name={this.state.name[4]} description={this.state.description[4]} imageSrc={this.state.imageSrc[4]} title={this.state.title[4]} horns={this.state.horns[4]} /></Col>
                    <Col><HornedBeast name={this.state.name[5]} description={this.state.description[5]} imageSrc={this.state.imageSrc[5]} title={this.state.title[5]} horns={this.state.horns[5]} /></Col>
                </Row>
                <Row>
                    <Col><HornedBeast name={this.state.name[6]} description={this.state.description[6]} imageSrc={this.state.imageSrc[6]} title={this.state.title[6]} horns={this.state.horns[6]} /></Col>
                    <Col><HornedBeast name={this.state.name[7]} description={this.state.description[7]} imageSrc={this.state.imageSrc[7]} title={this.state.title[7]} horns={this.state.horns[7]} /></Col>
                    <Col><HornedBeast name={this.state.name[8]} description={this.state.description[8]} imageSrc={this.state.imageSrc[8]} title={this.state.title[8]} horns={this.state.horns[8]} /></Col>
                </Row>
                <Row>
                    <Col><HornedBeast name={this.state.name[9]} description={this.state.description[9]} imageSrc={this.state.imageSrc[9]} title={this.state.title[9]} horns={this.state.horns[9]} /></Col>
                    <Col><HornedBeast name={this.state.name[10]} description={this.state.description[10]} imageSrc={this.state.imageSrc[10]} title={this.state.title[10]} horns={this.state.horns[10]} /></Col>
                    <Col><HornedBeast name={this.state.name[11]} description={this.state.description[11]} imageSrc={this.state.imageSrc[11]} title={this.state.title[11]} horns={this.state.horns[11]} /></Col>
                </Row>
                <Row>
                    <Col><HornedBeast name={this.state.name[12]} description={this.state.description[12]} imageSrc={this.state.imageSrc[12]} title={this.state.title[12]} horns={this.state.horns[12]} /></Col>
                    <Col><HornedBeast name={this.state.name[13]} description={this.state.description[13]} imageSrc={this.state.imageSrc[13]} title={this.state.title[13]} horns={this.state.horns[13]} /></Col>
                    <Col><HornedBeast name={this.state.name[14]} description={this.state.description[14]} imageSrc={this.state.imageSrc[14]} title={this.state.title[14]} horns={this.state.horns[14]} /></Col>
                </Row>
                <Row>
                    <Col><HornedBeast name={this.state.name[15]} description={this.state.description[15]} imageSrc={this.state.imageSrc[15]} title={this.state.title[15]} horns={this.state.horns[15]} /></Col>
                    <Col><HornedBeast name={this.state.name[16]} description={this.state.description[16]} imageSrc={this.state.imageSrc[16]} title={this.state.title[16]} horns={this.state.horns[16]} /></Col>
                    <Col><HornedBeast name={this.state.name[17]} description={this.state.description[17]} imageSrc={this.state.imageSrc[17]} title={this.state.title[17]} horns={this.state.horns[17]} /></Col>
                </Row>
                <Row>
                    <Col><HornedBeast name={this.state.name[18]} description={this.state.description[18]} imageSrc={this.state.imageSrc[18]} title={this.state.title[18]} horns={this.state.horns[18]} /></Col>
                </Row>
            </Container>
        </div>
        )
    }
    
}


export default Main ;

            

