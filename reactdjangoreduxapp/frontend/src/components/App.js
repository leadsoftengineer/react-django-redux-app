/**
 * KYIV MEDIA 25.11.2019
*/
import ReactDom from 'react-dom';

import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <h1>React App</h1>
        )
    }
}
ReactDom.render(<App />,document.getElementById('app'));

