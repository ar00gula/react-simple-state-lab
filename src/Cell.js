import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }


    // setState = () => {
    //     return this.setState({color: '#333'})
    // }

    changeColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return <div onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color}}>{this.state.color}</div>
    }
}