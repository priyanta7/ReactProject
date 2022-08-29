import React, { Component } from 'react'
import './stylesheet.css'
 class music extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "musicimg1.jpg"
        }
    }
    changeImage1(imgpath){
        this.setState(
            {
                message : imgpath
            }
        )
    }

    render() {
        return (
            <div className = "body">
            <div className ="image1"><img src = {this.state.message} height ="400px" width ="400px"></img></div>
            <button className ="button1" onClick={() => this.changeImage1("musicumg2.jpg")}>Next</button>
            <button className ="button2" onClick={() => this.changeImage1("musicimg1.jpg")}>Previous</button>
           </div>
        )
    }
}

export default music



