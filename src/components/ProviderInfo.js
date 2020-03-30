import React from 'react';
import hospital from '../images/Hospital.jpeg';
import ContactForm from './ContactForm';
import {Grid, Col, Row, Item} from './styleGrid';


class ProviderInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <Grid>
          <Item>
            Item 1
            <h1>Provider Name</h1>
            <p>Address</p>
            <p>Operation Hours</p>
            <p>Website Link</p>
          </Item>

          <Item>
            <h3>Anouncement</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Item>

          <Item>
            <h3>Stats</h3>
            <p>Testing Criteria: Priority1 </p>
            <p>Testing Capacity: </p>
            <p>General Test Ratio: </p>
            <p>Other: </p>
          </Item>

          <Item>
            Item 4
            <h2>Contact Form</h2>
            <h4>Phone Number: </h4>
            <div>CALL CLINIC</div>
            <ContactForm />
          </Item>

        </Grid>

    )
  }
}

export default ProviderInfo;