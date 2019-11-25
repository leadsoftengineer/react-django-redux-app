/**
 * KYIV MEDIA 25.11.2019
*/
import ReactDom from 'react-dom';
import React, { Component } from 'react';
import Header from './layout/Header';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <Header />
        )
    }
}
ReactDom.render(<App />,document.getElementById('app'));

