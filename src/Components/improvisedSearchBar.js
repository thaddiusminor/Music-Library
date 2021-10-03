import React from "react"

class ImprovisedSearchBar extends React.Component{

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

export default ImprovisedSearchBar;