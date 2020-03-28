import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>

        <h4>Introduce the app</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>

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