import React from 'react';

const UserForm = (props) => {
  return (
    <div>
      <h3>User information</h3>
      <form onSubmit={props.handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          onChange={props.handleInputChange}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          onChange={props.handleInputChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={props.handleInputChange}
        />
        <label>Phone No.</label>
        <input
          type="number"
          name="phone"
          onChange={props.handleInputChange}
        />
        <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={props.handleInputChange}
        />
      </form>
    </div>
  )
}

export default UserForm;