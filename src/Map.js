import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      locations: [],
      some: ''
    }

    this.clickMe = this.clickMe.bind(this);

  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  componentDidMount(){
  }

  clickMe () {
    console.log('test')
    // this.setState({
    // some: 'new state'
    // })
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
        
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;