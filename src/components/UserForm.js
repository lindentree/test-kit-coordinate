import React from 'react';
import axios from 'axios';

class UserForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: ''
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

    let {firstName, lastName, email, phone, address} = this.state;
    let input = {firstName, lastName, email, phone, address};
    let headers = {'Content-Type': 'application/json'}
    axios.post('/user', input, {headers: headers})
      .then(res => {
        console.log(res)
      })

      e.target.reset();
  }

  render() {
    return (
      <div>
        <h3>User information</h3>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            onChange={this.handleInputChange}
          />
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            onChange={this.handleInputChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={this.handleInputChange}
          />
          <label>Phone Number:</label>
          <input
            type="number"
            name="phone"
            onChange={this.handleInputChange}
          />
          <label>Address</label>
          <input
            type="text"
            name="address"
            onChange={this.handleInputChange}
          />
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default UserForm;