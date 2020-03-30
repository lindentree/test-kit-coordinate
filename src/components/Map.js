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
      locations: this.props.locations
    }
  }

  render() {


      const Markers = this.state.locations.map((marker, index) => (
        <LocationMarker
          // required props
          key={marker['id']}
          lat={marker['geolocation'][0]}
          lng={marker['geolocation'][1]}
          tesxt={marker['provider_name']}
          // any user props
          //showBallon={index + rowFrom === this.props.openBallonIndex}
          //onCloseClick={this._onBalloonCloseClick}
          //hoveredAtTable={index + rowFrom === this.props.hoveredRowIndex}
          //scale={getScale(index + rowFrom, this.props.visibleRowFirst, this.props.visibleRowLast, K_SCALE_NORMAL)}
          //{...markerDescriptions[marker.get('type')]}
           //marker={marker}
          />
      ));

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        {Markers}
       
        </GoogleMapReact>
      </div>
    );
  }
}


 
export default SimpleMap;