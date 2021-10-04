import React from "react"

class ArtistSearchBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userInput:''
        };
      }
    
    

render() {

    return(
      
        <input type="Artist" placeholder={this.props.searchField}  onChange={this.props.onChange} /> 
    )
 }
}

export default ArtistSearchBar;