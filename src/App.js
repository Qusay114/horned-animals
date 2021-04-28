import React from 'react';
import data from './components/assets/data.json'
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import SelectedBeast from './components/SelectedBeast '

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      show:false,
      imageSrc:'',
      disc:'',
    }
  }

  popCard = (event) => {
    this.setState({show:true});
    data.forEach(animal => {
      if(animal.title === event.target.name)
      {
        this.setState({
          imageSrc:animal.image_url,
          disc:animal.description,
        })
      }
    })
  }
  handleClose = () => this.setState({show:false})
  render()
  {
    return(
      <div>
        <Header />
        <SelectedBeast show={this.state.show}  handleClose={this.handleClose} imageSrc={this.state.imageSrc} description={this.state.disc} />
        <Main  popCard={this.popCard}  />
        <Footer />
      </div>
    )
  }
}



export default App ;

