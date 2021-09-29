import React from "react"; 
import ReactDOM from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import axios from 'axios'; 
import DisplaySongs from "./displaySongs";


class App extends React.Component{
    constructor(){
        super(); 
        this.state = {
            songs:[]
        }
    }

componentDidMount(){
    axios.get('http://www.devcodecampmusiclibrary.com/api/music')
    .then(response => this.setState({songs: response.data}))
}

    render(){
        return(
            <div>
                <DisplaySongs />
            </div>
            
            
        )
    }
            
}     
    
export default App;