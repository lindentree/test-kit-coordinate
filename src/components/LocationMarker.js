import React from 'react';
import styled from 'styled-components';
import icon from '../hospital.jpg'

const LocationMarker = () => {
  return (
    <div style={{
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
     <img src={icon} width={30} height={30} alt="Icon" />
  </div>
  )
}

export default LocationMarker;