import React, { Component } from 'react';

class TOC extends Component {
    render() {
        var lists = []; //리스트를 만들고
        var data = this.props.data; //data 속성을 받는다
        var i = 0;

        while(i < data.length) {
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
            i = i + 1;
        }
        return (
                <nav>
                   {lists}
                </nav>
        );
    }
}

export default TOC;