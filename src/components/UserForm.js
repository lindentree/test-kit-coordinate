import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
    axios.post('http://localhost:8080/user/', input, {headers: headers})
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

const Button = styled.button`
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
`;
  const Container = styled.div`
    width: 50%;
    align: center;
    margin: auto;
    padding: 50px;
  `

  const H1 = styled.h1`
    text-align:center;
  `

  const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 24px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: white;
  `

  const Form = styled.form`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  `

  const Label = styled.label`
    float: left;
  `
