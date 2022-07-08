import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  
  
  addNameToList(inFirstName,inLastName) {
    const api = 'https://kk8q0tc5a8.execute-api.us-east-1.amazonaws.com/dev';
    const data = { "firstName" : inFirstName, "lastName":inLastName };
    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  
  
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
            <form>
                <label>First Name :</label>
                <input type="text" id="fName">
                <label>Last Name :</label>
                <input type="text" id="lName">
                <!-- set button onClick method to call function we defined passing input values as parameters -->
                <button type="button" onclick="addNameToList(document.getElementById('fName').value,document.getElementById('lName').value)">Call API</button>
            </form>
        </body>
      </div>
    );
  }
}

export default withAuthenticator(App);
