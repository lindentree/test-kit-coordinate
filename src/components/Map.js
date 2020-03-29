import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker'

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 37.8272, lng: -122.2913},
    zoom: 9
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <LocationMarker 
          lat={37.632780} 
          lng={-122.064390} 
          text={'Testing Center'} 
        />
      
        </GoogleMapReact>
      </div>
    );
  }
}

 
export default SimpleMap;