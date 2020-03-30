import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>

        <h4>About Us</h4>
        <p>This is a platform to facilitate COVID-19 testing allocation and coordination</p>
        <p>Sign up with your clinic's info or log-in to view nearby test locations and their status</p>

    </Container>
  )
}

export default Home;

const Container = styled.div`
  width: 70%;
  float: center;
  font-size: 30px;
  color: Dark grey;
  align: center;
  margin: auto;
  padding: 50px;
`;