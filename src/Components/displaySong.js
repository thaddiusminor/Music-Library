import React from "react";

const DisplaySongs = (props) => {

class DisplaySong extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <tr> 
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </table>
            </div>
        )
    }
}
}