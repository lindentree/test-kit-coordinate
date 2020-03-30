import React from 'react';
import axios from 'axios';
import {Button, Container, H1, Input, Form, Label} from './style';

class UserForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userName: '',
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

    let {userName, email, phone, address} = this.state;
    let input = {userName, email, phone, address};
    let headers = {'Content-Type': 'application/json'}
    axios.post('/user', input, {headers: headers})
      .then(res => {
        console.log(res)
      })

      e.target.reset();
  }

  render() {
    return (
      <Container>
        <H1>User information</H1>
        <Form onSubmit={this.handleSubmit}>
          <Label>User Name:</Label>
          <Input
            type="text"
            name="userName"
            onChange={this.handleInputChange}
          />
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.handleInputChange}
          />
          <Label>Phone Number:</Label>
          <Input
            type="number"
            name="phone"
            onChange={this.handleInputChange}
          />
          <Label>Address</Label>
          <Input
            type="text"
            name="address"
            onChange={this.handleInputChange}
          />
          <Button type="submit" value="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default UserForm;
