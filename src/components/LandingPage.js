import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import UserForm from './UserForm';
import ProviderForm from './ProviderForm';
import ContactForm from './ContactForm';
import styled from 'styled-components';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

class LandingPage extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/UserForm' component={UserForm} />
          <Route path='/ProviderForm' component={ProviderForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default LandingPage;