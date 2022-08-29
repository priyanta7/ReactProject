import React, { Component } from 'react'

 class Songlist extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              songname : '',
              comments : '',
              songtype : 'Western'
         }
     }
     handlesongnamechange = (event) => {
       this.setState(
           {
             songname: event.target.value
           }
       )
     }
     HandleCommentsChange = event => {
         this.setState(
             {
                 comments : event.target.value
             }
         )
     }
     HandleSongTypeChange = event => {
         this.setState(
             {
                 songname :event.target.value
             }
         )
     }
    render() {
        return(
            <form>
                <div>
                <label>SongName</label>
                  <input type = "text" 
                  value = {this.state.songname}
                  onChange = {this.handlesongnamechange} />

                </div>
                <div>
                <label>Comments</label>
                  <textarea value = {this.state.comments} 
                  onChange = {this.HandleCommentsChange} />

                </div>
                <div>
                <label>SongType</label>
                   <select value= {this.state.songtype} onChange = {this.HandleSongTypeChange}>
                    <option value = "western">Western</option>
                    <option value = "indian">Indian</option>
                    <option value = "traditional">Traditonal</option>
                   </select>
                </div>
            </form>
        )
    }
}

export default Songlist
