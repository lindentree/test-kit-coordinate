import React from 'react';

const UserInfo = ({user}) => {
  return (
    <div>
      <div>First Name:{user.firstName} LastName:{user.lastName}</div>
      <div>Email:{user.email}</div>
      <div>Phone No.:{user.phone}</div>
      <div>Address:{user.address}</div>
    </div>
  )
}

export default UserInfo;