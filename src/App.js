import React, { Component } from 'react'
import ChemReadings from './ChemReadings'
/* global $ */

class App extends Component {
    constructor(){
        super()

        this.state = {}
    }

    handleSubmit(){
        var chl = document.getElementById('chl-results').innerHTML
        this.setState({
            chl: chl
        })
    }

    render(){
        return (
            <div>
                <ChemReadings handleSubmit={()=>this.handleSubmit()} />
                <p>Submitted</p>
                <p>{this.state.chl}</p>
            </div>
        )
    }
}

export default App