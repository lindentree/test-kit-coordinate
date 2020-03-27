import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apiResponse: ""
    }
  }

componentDidMount () {
  axios.get('http://localhost:8080/testServer/')
  .then((response) => {
    this.setState({
      apiResponse: response.data
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p> {this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
