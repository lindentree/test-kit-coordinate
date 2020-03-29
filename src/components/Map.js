import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker'

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
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
          lat={59.955413} 
          lng={30.337844} 
          text={'Testing Center'} 
        />
      
        </GoogleMapReact>
      </div>
    );
  }
}

 
export default SimpleMap;