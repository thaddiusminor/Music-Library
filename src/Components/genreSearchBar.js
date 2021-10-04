import React from "react"

class GenreSearchBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userInput:''
        };
      }
    
    

render() {

    return(
      
        <input type="Genre" placeholder={this.props.searchField}  onChange={this.props.onChange} /> 
    )
 }
}

export default GenreSearchBar; 