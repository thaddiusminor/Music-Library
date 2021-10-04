import React from "react"

class ReleaseDate extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userInput:''
        };
      }
    
    

render() {

    return(
      
        <input type="Release Date" placeholder={this.props.searchField}  onChange={this.props.onChange} /> 
    )
 }
}

export default ReleaseDate; 