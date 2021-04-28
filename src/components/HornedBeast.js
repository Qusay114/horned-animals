import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast ';


class HornedBeast extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            votes:0,
        }
    }

    incrementVotes = () => 
    {
        this.setState(
            {
                votes: this.state.votes + 1 ,
            }
        );
    }

    popCard = () => {
        return this.props.popCards() ;
    }
   
    render()
    {
        return(
                <Card style={{ width: '22rem' ,height:'40rem' , margin:'5em 0em 10em 3em'  }}  >
                <Card.Img variant="top" src={this.props.imageSrc} style={{height:"18rem"}}  />
                <Card.Body style={{textAlign:'center'}}>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.description}
                </Card.Text>
                <Card.Text>
                <h2>{this.props.name}</h2>
                </Card.Text>
                <Card.Text>
                    it has {this.props.horns} horns
                </Card.Text>
                <Button onClick={this.incrementVotes} variant="primary">Vote</Button>
                <Card.Text>
                Votes Number: {this.state.votes}
                </Card.Text>
            </Card.Body>
            <SelectedBeast imageSrc={this.props.imageSrc} description={this.props.description} />
            </Card>
             
        )
    }
}


export default HornedBeast ;



