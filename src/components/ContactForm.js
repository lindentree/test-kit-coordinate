import React from 'react';
import axios from 'axios';
import {Button, Container, H1, Input, Form, Label, Select} from './style.js';

class ContactForm extends React.Component {
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
      <Container>
      <H1>Contact:</H1>
        <Form onSubmit={this.handleSubmit}>
          <Label>email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.handleInputChange}
          />
          <Label>Message:</Label>
          <Input
            type="text"
            name="message"
            onChange={this.handleInputChange}
          />
          <Button type="submit" value="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default ContactForm;
