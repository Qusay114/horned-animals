// import React from 'react';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


class SelectedBeast extends React.Component 
{
   
    render()
    {
        return(
                  <>
              
                    <Modal show={this.props.show} onHide={this.handleClose} size='lg' >
                        
                        <Modal.Body  style={{padding:'0rem'}}>
                            <Image src={this.props.imageSrc} style={{width:'100%',height:'30rem' }}/>
                            <p style={{textAlign:'center' , marginTop:'2rem' , fontSize:'2rem'}}>{this.props.description}</p>
                        </Modal.Body>
                            
                           
                        <Modal.Footer style={{textAlign:'center'}}>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                          Close
                        </Button>
                        
                      </Modal.Footer>
                     
                        
                    </Modal>
                  </>
                );
    }
              
              
        
}

export default SelectedBeast ;


