import React from 'react';
import {Button, Container, H1, Input, Form, Label} from './style';

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