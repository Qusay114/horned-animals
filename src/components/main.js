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
            return (
                        <HornedBeast name={animal.keyword} description={animal.description} imageSrc={animal.image_url} title={animal.title} horns={animal.horns}  />
                   )
        })
        return(
        <div id='container'>
            <CardColumns>{coluomns} </CardColumns>
        </div>
        )
    }
    
}


export default Main ;

            



