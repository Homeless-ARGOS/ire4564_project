import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div id="Content">
                {/*클릭시 각각의 내용*/}
               <article>
                   <h2>{this.props.title}</h2>
                   {this.props.desc}
               </article>
            </div>
        );
    }
}

export default Content;