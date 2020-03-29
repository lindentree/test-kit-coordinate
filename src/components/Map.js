import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker'

class SimpleMap extends Component {

  constructor(props) {

    super(props)
    this.state = {
      center: {
        lat: 37.8272,
        lng: -122.2913
      },
      zoom: 9,
      locations: []
    }
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        <LocationMarker 
          lat={37.632780} 
          lng={-122.064390} 
          text={'COVID-19 Testing Center'} 
        />
      
        </GoogleMapReact>
      </div>
    );
  }
}


 
export default SimpleMap;