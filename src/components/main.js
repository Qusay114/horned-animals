import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';




class Main extends React.Component
{
   
    render()
    {
        const coluomns = this.props.data.map(animal =>{
            return ( 
                        <HornedBeast key={animal.image_url} name={animal.keyword} description={animal.description} imageSrc={animal.image_url} title={animal.title} horns={animal.horns} popCard1={this.props.popCard} />
    
                    )
        })
        
        return(
        <div id='container'>
            <Form>
                <Form.Group style={{marginTop:'3rem'}}>
                    <Form.Label style={{fontSize:'1.5rem' , marginRight:'1rem'}}>Filter Animals:</Form.Label>
                    <Form.Control as="select" onChange={this.props.handleFilter} style={{width:'20rem' , display:'inline-block'}} >
                        <option value='all'>choose number of horns</option>
                        <option >1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>100</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            <Row>{coluomns} </Row>
        </div>
        )
    }
    
}


export default Main ;

            



