import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>

        <h4>Testing</h4>
        <p>A platform to facilitate COVID-19 testing allocation and coordination</p>

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