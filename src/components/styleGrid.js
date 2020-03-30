import styled, {css} from 'styled-components';

export const Grid = styled.div`
  display: grid
  grid-template-columns: 25% 3fr;
  grid-template-rows: 5% 3fr 5%;
  grid-gap: 5px
  border: 5px solid red;
  text-align: left;
  padding: 50px 0 0 50px;

`

export const Item = styled.div`

  padding: 20px;
  border: 1px solid blue;



`
