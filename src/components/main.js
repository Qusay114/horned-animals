import React from 'react';
import HornedBeast from './HornedBeast';
import dataFile from './assets/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns'

class Main extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data:dataFile ,
        }
    }

 
    render()
    {
        const coluomns = this.state.data.map(animal =>{
            return <CardColumns style={{display:'inline'}}>
                        <HornedBeast name={animal.keyword} description={animal.description} imageSrc={animal.image_url} title={animal.title} horns={animal.horns} />
                   </CardColumns>
        })
        return(
        <div id='container'>
            {coluomns}   
        </div>
        )
    }
    
}


export default Main ;

            



