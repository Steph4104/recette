import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import ContactForm from './component/contactform.js';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contactForm">contactForm</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/contactForm" component={ContactForm} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
