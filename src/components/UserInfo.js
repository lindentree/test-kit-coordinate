import React from 'react';

const UserEntry = ({user}) => {
  return (
    <div>
      <div>First Name:{user.firstName} LastName:{user.lastName}</div>
      <div>Email:{user.email}</div>
      <div>Phone No.:{user.phone}</div>
    </div>
  )
}

export default UserEntry;