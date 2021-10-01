import React from "react"; 
import ReactDOM from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import axios from 'axios'; 
import DisplaySongs from "./displaySongs";
import NavBar from "./navbar";
import SearchBar from "./searchbar";



class App extends React.Component{
    constructor(props){
        super(props); 
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
                <SearchBar />
                <DisplaySongs songs={this.state.songs} />
            </div>
            
            
        )
    }
            
}     
    
export default App;