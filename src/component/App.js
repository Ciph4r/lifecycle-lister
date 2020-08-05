import React, {Component} from 'react'
import Axios from 'axios'
import Albums from './Albums'

class App extends Component{
    state = {
    data: []    
    }


    componentDidMount(){
            
            Axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
            .then(res => {
                const data = []
                for (let i = 0 ; i < 20 ; i++){
                    data.push(res.data[i])
                }
                this.setState({
                    data
                })
            })
       


    }

    render(){
        return(
            <div>
                <h1>h1</h1>
                <Albums data = {this.state.data} />
            </div>
        )
    }
}

export default App