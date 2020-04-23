import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <div id="Subject">
                {/* 제목과 부가적인 내용 */}
                <header>
                    <h1><a href="/" onClick={function(e){
                        {/*onClick을 이용하여 이벤트를 설치하기 !!!
                        기본적인 동작 리로드(페이지 전환x)
                        를 막기 위해서 사용하는 코드*/}
                        //alert("HELLO!");
                        e.preventDefault();
                        //this.state.mode = 'welcome'; 잘못된 state 변경법
                        //bind(this)를 추가한다 중요! 
                        this.setState({
                            mode: 'welcome'
                        });
                    }.bind(this)}>{this.props.title}</a></h1>
                    {this.props.sub}
                </header>
            </div>
        );
    }
}

export default Subject;