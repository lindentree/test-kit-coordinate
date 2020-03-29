import React from 'react';
import axios from 'axios';
import {Button, Container, H1, Input, Form, Label, Select} from './style.js';


class ProviderForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      providerId: '',
      providerName: '',
      address: '',
      email: '',
      phoneNumber: '',
      operatingHours: '',
      testsAvailable: '',
      currentStatus: '',
      testCapacity: '',
      testCriteria: ''
    };
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
    let {providerId, providerName, address, email, phoneNumber, operatingHours, testsAvailable, currentStatus, testCapacity, testCriteria} = this.state;
    let data = {providerId, providerName, address, email, phoneNumber, operatingHours, testsAvailable, currentStatus, testCapacity, testCriteria};
    let headers = {'Content-Type': 'application/json'}

    axios.post('/provider', data, {headers: headers})
      .then(res => {
        console.log('axios.post:', data);

      })
      .catch(err => {
        console.log('fail to post:', err);
      })

    e.target.reset();
  }

  render() {
    return (
      <Container>
        <H1>Provider Info Content:</H1>

        <Form onSubmit={this.handleSubmit}>
          <Label>Provider Id:</Label>
          <Input type="number" name="providerId" onChange={this.handleInputChange}
          />

          <Label>Provider Name:</Label>
          <Input type="text" name="providerName" onChange={this.handleInputChange}
          />

          <Label>Address:</Label>
          <Input type="text" name="address" onChange={this.handleInputChange} />

          <Label>Email:</Label>
          <Input type="email" name="email" onChange={this.handleInputChange} />

          <Label>Phone Number:</Label>
          <Input type="number" name="phoneNumber" onChange={this.handleInputChange} />

          <Label>Operating Hours:</Label>
          <Input type="text" name="operatingHours" onChange={this.handleInputChange} />

          <Label>Tests Available:</Label>
          <Input type="number" name="testsAvailable" onChange={this.handleInputChange} />

          <Label>Current Status:</Label>
          <Input type="text" name="currentStatus" onChange={this.handleInputChange} />

          <Label>Test Capacity:</Label>
          <Select value={this.state.value} onChange={this.handleInputChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>

          <Label>Test Criteria:</Label>
          <Select value={this.state.value} onChange={this.handleInputChange}>
            <option selected value="low" >Priority 1</option>
          </Select>

          <Button type="submit" value="submit"> Submit </Button>
        </Form>
      </Container>
    );
  }
}

export default ProviderForm;
