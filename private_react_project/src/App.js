/* eslint-disable import/first */

import React, { Component } from 'react';
import './App.css';

import Navi from './ire0546_Component/NavigationBar'
import Prof from './ire0546_Component/Profile'
import Textlist from './ire0546_Component/Textlist'
import TextBox from './ire0546_Component/TextBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi></Navi>
        <Prof></Prof>
        <Textlist></Textlist>
        <TextBox></TextBox>
      </div>
    );
  }
}


export default App;
