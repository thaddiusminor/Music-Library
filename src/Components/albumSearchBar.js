import React from "react"

class AlbumSearchBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userInput:''
        };
      }
    
    

render() {

    return(
      
        <input type="text" placeholder={this.props.searchField}  onChange={this.props.onChange} /> 
    )
 }
}

export default AlbumSearchBar; 