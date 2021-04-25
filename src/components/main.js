import React from 'react'; 
import HornedBeast from './HornedBeast';

class Main extends React.Component{
    render(){
        return(
            <div>
            <HornedBeast name={'Dog'} description={'This is a dog'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzX3f-ls8hHhI-Zevpj4fbTEBUzK2b4YF6pA&usqp=CAU'} title={'random image'}/>
            <HornedBeast name={'Cat'} description={'This is a cat'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWo0u-TB5eyu88DkM8Gvc6vWOOQlXxjSmAw&usqp=CAU'}/>
            </div>
        )
    }
}


export default Main ;