import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class ProviderForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      testAmounts: '',
      facilityName: '',
      address: '',
      phoneNumber: '',
      providerList: []
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

    let {testAmounts, facilityName, address, phoneNumber} = this.state;
    let data = {testAmounts, facilityName, address, phoneNumber};
    let headers = {'Content-Type': 'application/json'}

    axios.post('/provider', data, {headers: headers})
      .then(res => {
        this.setState({
          testAmounts: testAmounts,
          facilityName: '',
          address: '',
          phoneNumber: '',

        })
      })

    e.target.reset();
  }


  render() {
    return (
      <Container>
      <H1>Facility Info Content:</H1>
        <Form onSubmit={this.handleSubmit}>
          <Label>Test Amounts</Label>
          <Input
            type="number"
            name="testAmounts"
            onChange={this.handleInputChange}
          />
          <Label>Facility Name:</Label>
          <Input
            type="text"
            name="facilityName"
            onChange={this.handleInputChange}
          />
          <Label>Address:</Label>
          <Input
            type="text"
            name="address"
            onChange={this.handleInputChange}
          />
          <Label>Phone Number:</Label>
          <Input
            type="number"
            name="phoneNumber"
            onChange={this.handleInputChange}
          />
          <Button type="submit" value="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default ProviderForm;


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
`

const Container = styled.div`
  width: 50%;
  align: center;
  margin: auto;
  padding: 50px;
`

const H1 = styled.h1`
  text-align: center;
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


/*
<Button type="submit" value="submit">Direct</Button>
<Button type="submit" value="submit">Request</Button>
<Button type="submit" value="submit">Contact</Button>
*/