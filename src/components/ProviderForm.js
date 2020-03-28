import React from 'react';

class ProviderForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      testAmounts: '',
      facilityName: '',
      address: '',
      phoneNumber: ''
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
    let input = {testAmounts, facilityName, address, phoneNumber};
    let headers = {'Content-Type': 'application/json'}

    e.target.reset();
  }



  render() {
    return (
      <div>
      <h3>Facility Info Content:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Test Amounts</label>
          <input
            type="number"
            name="testAmounts"
            onChange={this.handleInputChange}
          />
          <label>Facility Name:</label>
          <input
            type="text"
            name="facilityName"
            onChange={this.handleInputChange}
          />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            onChange={this.handleInputChange}
          />
          <label>Phone Number:</label>
          <input
            type="number"
            name="phoneNumber"
            onChange={this.handleInputChange}
          />
          <button type="submit" value="submit">Submit</button>
          <button type="submit" value="submit">Direct</button>
          <button type="submit" value="submit">Request</button>
          <button type="submit" value="submit">Contact</button>
        </form>
      </div>
    )
  }
}

export default ProviderForm;