import React, {Component} from 'react'
import Axios from 'axios'
import Albums from './Albums'

class App extends Component{
    state = {
    data: []    
    }


    componentDidMount(){
        
        for (let i = 1; i < 21 ; i++){
            Axios.get(`https://jsonplaceholder.typicode.com/albums/${i}/photos`)
            .then((res) => {
                const data = [...this.state.data , res.data[0]]
            
               this.setState({
                data
            })

            })
        }

    }

    render(){
        console.log(this.state.data)

        return(
            <div>
                <h1>h1</h1>
                <Albums data = {this.state.data} />
            </div>
        )
    }
}

export default App