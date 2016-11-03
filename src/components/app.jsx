import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import Nav from './nav.jsx';

const App = ReactDOM.render(<Nav />, document.getElementById('#root'));



export default withRouter(App);
