import React from 'react';
import HornedBeast from './HornedBeast';
import dataFile from './assets/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class Main extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data:dataFile ,
            fixedData:dataFile,
            filteredData:dataFile,
        }
    }

    handleFilter = (event) => {
        if(event.target.value !== 'all')
        {
            const selectedHorns = Number(event.target.value);
            const filtering = this.state.fixedData.filter( animal => animal.horns === selectedHorns );
            this.setState({
                filteredData:filtering,
            });
        }
        else
        this.setState({
            filteredData:this.state.fixedData,
        }); 
    }

    filterAnimals = () => this.setState({data:this.state.filteredData});

    render()
    {
        const coluomns = this.state.data.map(animal =>{
            return ( 
                        <HornedBeast key={animal.image_url} name={animal.keyword} description={animal.description} imageSrc={animal.image_url} title={animal.title} horns={animal.horns} popCard1={this.props.popCard} />
    
                    )
        })
        return(
        <div id='container'>
            <Form>
                <Form.Group style={{marginTop:'3rem'}}>
                    <Form.Label style={{fontSize:'1.5rem' , marginRight:'1rem'}}>Filter Animals:</Form.Label>
                    <Form.Control as="select" onChange={this.handleFilter} style={{width:'20rem' , display:'inline-block'}} >
                        <option value='all'>choose number of horns</option>
                        <option >1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </Form.Control>
                <Button onClick={this.filterAnimals} style={{display:'inline-block' , marginLeft:'2rem'}}>Search</Button>
                </Form.Group>
            </Form>
            <Row>{coluomns} </Row>
        </div>
        )
    }
    
}


export default Main ;

            



