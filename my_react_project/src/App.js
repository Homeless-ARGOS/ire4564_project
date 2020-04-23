import React, { Component } from 'react';

import Subject from './Component/Subject';
import TOC from './Component/TOC';
import Content from './Component/Content';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state =  {
      mode: 'welcome', //기본 mode를 welcome으로 세팅
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!'}, //state가 welcome일 경우 세팅해 줄 값들
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
        {id:4, title:'PHP', desc:' PHP is server Language'}
      ]
    }
  }
  render() {
    var _title, _desc = null; //줄 값들 설정해주기
    if(this.state.mode === 'welcome'){
      //mode가 welcome일때, 각각의 welcome의 값을 넣어주기
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      //mode가 read일때
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;

    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject><br/>
        <TOC data={this.state.contents}></TOC><br/><br/>
        <Content title={_title} desc={_desc}></Content>
        {/*Content의 title과 desc를 mode별로 바꿀 수 있도록 설정함*/}
      </div>
    );
  }
}

export default App;
