import React, { Component } from 'react';
import NameBadge from './NameBadge'
import './App.css';
import './NameBadge.css';

class App extends Component {



    render() {
        return (
            <div className="App">
                <NameBadge name='Mike' />


            </div>

        );
    }
}

export default App;