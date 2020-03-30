import React from 'react';
import styled from 'styled-components';
import icon from '../images/Icn_Hospital.png'
import marker from '../images/Icn_Locate.png';

const InfoWindow = props => (
  props.show ? (<div style={{width: 100, height: 100}}>Info window</div>) : null
)

const LocationMarker = ({text, provider, show}) => {

  if (!provider) {
    return (
      <div>
      <div style={{
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
      }}>
      <img src={marker} width={20} height={20} border-radius={15}border-color={'green'} alt="Icon" />
      {text}
       <InfoWindow
      show={show}
    />
    </div>
    </div>


      )

  } else {
     return (
    <div>
      <div style={{
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
      }}>
      <img src={icon} width={30} height={30} border-radius={15} border={12} border-color={'green'} alt="Icon" />
      {text}
      const InfoWindow = props => (
      props.show ? (<div style={{width: 100, height: 100}}>Info window</div>) : null
      )
      </div>
    
  </div>
  )
  }
  
}

export default LocationMarker;