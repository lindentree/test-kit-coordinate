import React from 'react';
import styled from 'styled-components';
import icon from '../Icn_Hospital.png'

const LocationMarker = ({text}) => {
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
      <img src={icon} width={20} height={20} border-radius={15} border={12} border-color={'green'} alt="Icon" />
      {text}
    </div>
    
  </div>
  )
}

export default LocationMarker;