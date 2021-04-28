// import React from 'react';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


class SelectedBeast extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state={
            show:false,
        }
    }

    handleClose = () => this.setState({
        
        show:false,
        });
    handleShow  = () => this.setState({
        show:true,
    })
    render()
    {
        return(
                  <>
                    <Button variant="primary" onClick={this.handleShow} style={{position:'absolute' , bottom:'0%',left:'50%',transform:'translateX(-50%)'}}>
                      Show more details
                    </Button>
              
                    <Modal show={this.state.show} onHide={this.handleClose} size='lg' >
                        
                        <Modal.Body  style={{padding:'0rem'}}>
                            <Image src={this.props.imageSrc} style={{width:'100%',height:'30rem' }}/>
                            <p style={{textAlign:'center' , marginTop:'2rem' , fontSize:'2rem'}}>{this.props.description}</p>
                        </Modal.Body>
                            
                           
                        <Modal.Footer style={{textAlign:'center'}}>
                        <Button variant="secondary" onClick={this.handleClose}>
                          Close
                        </Button>
                        
                      </Modal.Footer>
                     
                        
                    </Modal>
                  </>
                );
    }
              
              
        
}

export default SelectedBeast ;


