import React from 'react';

class ProviderForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      facilityName: '',
      address: '',
      availableKits: ''
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

    let {facilityName, address, availableKits} = this.state;
    let input = {facilityName, address, availableKits};
    let headers = {'Content-Type': 'application/json'}
    console.log('input:', input);
  }



  render() {
    return (
      <div>
      <h3>Facility Info Content:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Facility Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
          />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            onChange={this.handleInputChange}
          />
          <label>Available Kits:</label>
          <input
            type="text"
            name="availableKits"
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