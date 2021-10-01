import React from "react";

const DisplaySongs = (props) => {
    
        return(
            
                <table>
                    <thead>
                         <tr>
                        <th>Title</th>
                        <th>Album</th>                  
                        <th>Artist</th>                      
                        <th>Genre</th>                       
                        <th>Release Date</th>
                         </tr>
                    </thead>
                  <tbody>
                        
                        {props.songs.map(song => {
                            return(
                                <tr>
                                    <td>{song.title}</td>
                                    <td>{song.album}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.genre}</td>
                                    <td>{song.releaseDate}</td>
                                </tr>
                            )
                        }) }
                        
                    </tbody>
                </table>
                
            
        );
    }
export default DisplaySongs;