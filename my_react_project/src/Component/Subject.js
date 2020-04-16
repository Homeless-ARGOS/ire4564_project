import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <div id="Subject">
                {/* 제목과 부가적인 내용 */}
                <header>
                    <h1>{this.props.title}</h1>
                    {this.props.sub}
                </header>
            </div>
        );
    }
}

export default Subject;