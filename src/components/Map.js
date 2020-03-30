import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker'

class SimpleMap extends Component {

  constructor(props) {

    super(props)
    this.state = {
      provider_id: 6,
      center: {
        lat: 37.8272,
        lng: -122.2913
      },
      zoom: 9,
      locations: this.props.locations,
      show: false
    }
  }


  componentDidMount () {
    let result = this.props.locations.filter(obj=>{
      return obj.id === 6
    })

    let newCenter = {
      center: {
        lat: result[0].geolocation[0],
        lng: result[0].geolocation[1]
      }
  
    }
    this.setState(newCenter);

  }

  _onChildClick = (key, childProps) => {
    this.setState({show: !this.state.show})
  }


  render() {

      
      const Markers = this.state.locations.map((marker, index) => {

        if(marker['id']!==this.state.provider_id) {
          return (
            <LocationMarker
            // required props
            key={marker['id']}
            lat={marker['geolocation'][0]}
            lng={marker['geolocation'][1]}
            text={marker['provider_name']}
            show={this.state.show}
            // any user props
            //showBallon={index + rowFrom === this.props.openBallonIndex}
            //onCloseClick={this._onBalloonCloseClick}
            //hoveredAtTable={index + rowFrom === this.props.hoveredRowIndex}
            //scale={getScale(index + rowFrom, this.props.visibleRowFirst, this.props.visibleRowLast, K_SCALE_NORMAL)}
            //{...markerDescriptions[marker.get('type')]}
             //marker={marker}
            />
          )
      } else {
        return (
             <LocationMarker
            // required props
            key={marker['id']}
            lat={marker['geolocation'][0]}
            lng={marker['geolocation'][1]}
            provider={true}
            // any user props
            //showBallon={index + rowFrom === this.props.openBallonIndex}
            //onCloseClick={this._onBalloonCloseClick}
            //hoveredAtTable={index + rowFrom === this.props.hoveredRowIndex}
            //scale={getScale(index + rowFrom, this.props.visibleRowFirst, this.props.visibleRowLast, K_SCALE_NORMAL)}
            //{...markerDescriptions[marker.get('type')]}
             //marker={marker}
            />

          )

      }
      });

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          onChildClick={this._onChildClick}
        >
        {Markers}
       
        </GoogleMapReact>
      </div>
    );
  }
}


 
export default SimpleMap;