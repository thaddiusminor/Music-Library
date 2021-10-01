import React from "react"

class SearchBar extends React.Component{
render(){
    return(
        <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <input type="text" placeholder="Search.."> 
        </input>
      </div>
    )
}
}

export default SearchBar; 