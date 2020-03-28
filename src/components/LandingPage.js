import React from 'react';
import UserForm from './UserForm.js';
import ProviderForm from './ProviderForm.js';
import styled from 'styled-components';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

class LandingPage extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <div>

            <Route exact path="/userSignup" component={UserForm} />
            <Link to="/userSignup">User Signup</Link>

            <Route exact path="/ProviderSignup" component={ProviderForm} />
            <Link to="/ProviderSignup">Provider Signup</Link>

        </div>
      </BrowserRouter>
    );
  }
}

export default LandingPage;