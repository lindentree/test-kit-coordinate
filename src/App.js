import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SimpleMap from './Map'

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
        </header>
        <SimpleMap> </SimpleMap>
        <p> {this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
