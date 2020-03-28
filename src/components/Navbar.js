import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Navbar =() => {
  const underline = { textDecoration: "none" };
  const textColor = {color: 'white'};
  return (
    <Container>
    <Title>COVID-19 Test Kits Availability</Title>
      <Ul>
        <Li>
          <NavLink to="/" style={{ ...underline, ...textColor }}>
            Home
          </NavLink>
        </Li>
        <Li>
          <NavLink to="UserForm" style={{ ...underline, ...textColor }}>
            User
          </NavLink>
        </Li>
        <Li>
          <NavLink to="ProviderForm" style={{ ...underline, ...textColor }}>
            Provider
          </NavLink>
        </Li>
      </Ul>
    </Container>
  );
}

export default Navbar;

const Container = styled.div `
  background-color: #303f9f;
  height: 90px;
`
const Title = styled.h1 `
  float: left;
  color: white;
  margin-left: 30px;
`

const Ul = styled.ul`
  list-style: none;
  float: right;
  font-size: 35px;
  margin: 15px;

`

const Li = styled.li`
  color: #e8eaf6;
  display: inline-block;
  padding: 0 30px;
  margin: 0;
`


/*
    <Container>
      <Ul>
        <Li><Link> <NavLink to='/'>Home</NavLink> </Link></Li>
        <Li><NavLink to='UserForm'>User</NavLink></Li>
        <Li><NavLink to='ProviderForm'>Provider</NavLink></Li>
      </Ul>
    </Container>

*/