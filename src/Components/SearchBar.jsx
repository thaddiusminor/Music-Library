import React from "react"

class SearchBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userInput:''
        };
        this.onInputchange = this.onInputchange.bind(this);
      
      }
    
      onInputchange(event) {
        this.setState({
          userInput: event.target.value,
        })
      }

    
      onSubmitForm() {

        }

render() {
    console.log(this.state.userInput)
    return(
        <div class="topnav">
        <a class="active" href="https://google.com">Home</a>
        <a href="https://google.com">About</a>
        <a href="https://google.com">Contact</a>
        <input type="text" placeholder='search'  onChange={this.onInputchange}> 
        </input>
        <button id='btn'>clickme</button>
        </div>
    )
 }
}

export default SearchBar;