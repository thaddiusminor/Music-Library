import React from "react"; 
import ReactDOM from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import axios from 'axios'; 
import DisplaySongs from "./displaySongs";
import NavBar from "./navbar";
import SearchBar from "./searchbar";
import ImprovisedSearchBar from "./improvisedSearchBar";
import AlbumSearchBar from "./albumSearchBar";
import ArtistSearchBar from "./artistSearchBar";
import GenreSearchBar from "./genreSearchBar";
import ReleaseDate from "./releaseDate";



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
onArtistChange = (event) =>{
    const filteredArtist= this.state.songs.filter((art) =>art.artist.includes(event.target.value));
    this.setState({
        filteredSongs: filteredArtist
    })
}

onGenreChange = (event) =>{
    const filteredGenre = this.state.songs.filter((genre) => genre.genre.includes(event.target.value));
    this.setState({
        filteredSongs: filteredGenre
    })
}

onReleaseChange = (event) =>{
    const filteredRelease = this.state.songs.filter((release) => release.releaseDate.includes(event.target.value));
    this.setState({
        filteredSongs: filteredRelease
    })
}


    render(){
        return(
            
            <div>
                <SearchBar/> 
                <ImprovisedSearchBar searchField="Title" onChange={this.onTitleChange} /> 
                <AlbumSearchBar searchField="Album" onChange={this.onAlbumChange} />
                <ArtistSearchBar searchField="Artist" onChange={this.onArtistChange} />
                <GenreSearchBar searchField="Genre" onChange={this.onReChange} />
                <ReleaseDate searchField="Release Date" onChange={this.onReleaseChange} />
                <DisplaySongs songs={this.state.filteredSongs} albums={this.state.filteredAlbums} />
                
            </div>
            
            
        )
    }
            
}     
    
export default App;