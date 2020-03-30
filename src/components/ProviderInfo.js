import React from 'react';
import hospital from '../images/Hospital.jpeg';
import ContactForm from './ContactForm';
import {Grid, Col, Row, Item} from './styleGrid';
import './Grid.css';


class ProviderInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <div className="container">
          <div className="item item--1">
            Item 1
            <h1>Provider Name</h1>
            <p>Address</p>
            <p>Operation Hours</p>
            <p>Website Link</p>
          </div>

          <div className="item item--2">
            Item 2
            <h3>Anouncement</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <div className="item item--3">
            Item 3
            <h3>Stats</h3>
            <p>Testing Criteria: Priority1 </p>
            <p>Testing Capacity: </p>
            <p>General Test Ratio: </p>
            <p>Other: </p>
          </div>

          <div className="item item--4">
            Item 4
            <h2>Contact Form</h2>
            <h4>Phone Number: </h4>
            <div>CALL CLINIC</div>
            <ContactForm />
          </div>

          <div className="item item--5">
            Item 5
            <h2>Contact Form</h2>
            <h4>Phone Number: </h4>
            <div>CALL CLINIC</div>
            <ContactForm />
          </div>

          <div className="item item--6">
            Item 6
            <h2>Contact Form</h2>
            <h4>Phone Number: </h4>
            <div>CALL CLINIC</div>
            <ContactForm />
          </div>

        </div>

    )
  }
}

export default ProviderInfo;