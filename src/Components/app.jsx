import React from "react"; 
import ReactDOM from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import axios from 'axios'; 
import DisplaySongs from "./displaySongs";
import NavBar from "./navbar";
import SearchBar from "./searchbar";
import ImprovisedSearchBar from "./improvisedSearchBar";
import AlbumSearchBar from "./albumSearchBar";



class App extends React.Component{
    constructor(props){
        super(props); 
        this.state = { 
            songs:[], 
            filteredSongs:[], 
            filteredAlbums:[]
            
            
        }
       
    }

componentDidMount(){
    axios.get('http://www.devcodecampmusiclibrary.com/api/music')
    .then(response => this.setState({
        songs: response.data,
        filteredSongs: response.data
    }))
}
onTitleChange = (event) =>{ 
    const filteredSongs= this.state.songs.filter((song) => song.title.includes(event.target.value));
    this.setState({
        filteredSongs: filteredSongs

    })
}

onAlbumChange = (event) =>{
    const filteredAlbums= this.state.songs.filter((song) => song.album.includes(event.target.value));
    this.setState({
        filteredSongs: filteredAlbums
    })
}





    render(){
        return(
            
            <div>
                <SearchBar/> 
                <ImprovisedSearchBar searchField="Title" onChange={this.onTitleChange} /> 
                <AlbumSearchBar searchField="Album" onChange={this.onAlbumChange} />
                <DisplaySongs songs={this.state.filteredSongs} albulms={this.state.filteredAlbums} />
                
            </div>
            
            
        )
    }
            
}     
    
export default App;