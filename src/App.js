import React from 'react';
import JsonData from './components/assets/data.json'
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
      filteredData:JsonData,
    }
  }

  handleFilter = (event) => {
    if(event.target.value !== 'all')
    {
        const selectedHorns = Number(event.target.value);
        const filtering = JsonData.filter( animal => animal.horns === selectedHorns );
        this.setState({
            filteredData:filtering,
        });
    }
    else
    this.setState({
        filteredData:JsonData,
    }); 
}

  popCard = (event) => {
    this.setState({show:true});
    JsonData.forEach(animal => {
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
        <Main  popCard={this.popCard}  handleFilter={this.handleFilter} data={this.state.filteredData} />
        <Footer />
      </div>
    )
  }
}



export default App ;

