import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
    this.setState( {value: event.target.value} )
}
handleSubmit = (event) => {
    event.preventDefault();
    var request = this.state.value;
    if (!request) {
        return;
    }
    fetch(`/echo?request=${request}`)
        .then(response => {
        return response.text();
})
.then(body => {
        alert(this.state.value);
});
}
render = () => {
    return (
        <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>This is ReactApp</h2>
    </div>
    <div>
    <form className="App-intro" onSubmit={this.handleSubmit}>
<input type="text" value={this.state.value} onChange={this.handleChange} />
<input type="submit" value="Submit" />
        </form>
        </div>
        </div>
)
}
}

export default App;