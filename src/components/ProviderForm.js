import React from 'react';
import axios from 'axios';
import {Button, Container, H1, Input, Form, Label} from './style.js';

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
      testCriteria: '',
      providerList: []
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
        console.log('Provider form handle sumbit clicked');
        let providerList = this.state.providerList;
        providerList.concat(res.data);
        this.setState({
          providerList: providerList
        });
      })
      .catch(err => {
        console.log('fail to post:', err);
      })

    e.target.reset();
  }


  render() {
    return (
      <Container>
        <H1>Facility Info Content:</H1>

        <Form onSubmit={this.handleSubmit}>
          <Label>Provider Id</Label>
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

          <Label>Operating Hours</Label>
          <Input type="text" name="operatingHours" onChange={this.handleInputChange} />

          <Label>Tests Available</Label>
          <Input type="number" name="testsAvailable" onChange={this.handleInputChange} />

          <Label>Current Status</Label>
          <Input type="text" name="currentStatus" onChange={this.handleInputChange} />

          <Label>Test Capacity</Label>
          <Input type="text" name="testCapacity" onChange={this.handleInputChange} />

          <Label>Test Criteria</Label>
          <Input type="text" name="testCriteria" onChange={this.handleInputChange} />

          <Button type="submit" value="submit"> Submit </Button>
        </Form>
      </Container>
    );
  }
}

export default ProviderForm;


/*

        this.setState({
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
        });

*/
