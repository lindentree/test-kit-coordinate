import React from 'react';
import axios from 'axios';

class EmailForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      message: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('this.state:', this.state);

    let {email, message} = this.state;
    let input = {email, message};
    let headers = {'Content-Type': 'application/json'}

    e.target.reset();
  }


  render() {
    return (
      <div>
      <h3>Contact:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>email:</label>
          <input
            type="email"
            name="email"
            onChange={this.handleInputChange}
          />
          <label>Message:</label>
          <input
            type="text"
            name="message"
            onChange={this.handleInputChange}
          />
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default EmailForm;