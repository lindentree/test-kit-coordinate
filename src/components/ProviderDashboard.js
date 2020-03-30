import React, { Component } from 'react';
import SimpleMap from './Map'
import styled from 'styled-components';

import TestProviders from '../FakeData'


class ProviderDashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: null,
      locations: TestProviders
    }
  }

  render() {
    return (
        <div>
            <SimpleMap locations={this.state.locations}>
            </SimpleMap>

        </div>        

    )

  }
  
}

export default ProviderDashboard;