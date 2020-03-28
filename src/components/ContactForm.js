import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

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


const Button = styled.button `
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  font-size: 16px;
  align: center;
`

const Container = styled.div `
  width: 50%;
  align: center;
  margin: auto;
  padding: 50px;
`

const H1 = styled.h1 `
  text-align: center;
`

const Input = styled.input `
  width: 100%;
  padding: 12px 20px;
  margin: 24px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;
`

const Form = styled.form `
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`

const Label = styled.label `
  float: left;
`