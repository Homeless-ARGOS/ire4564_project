import React, { Component } from 'react';

import Subject from './Component/Subject';
import TOC from './Component/TOC';
import Content from './Component/Content';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state =  {
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
        {id:4, title:'PHP', desc:' PHP is server Language'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject><br/>
        <TOC data={this.state.contents}></TOC><br/><br/>
        <Content title="HTML" desc="HTML is MyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
