import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div id="Content">
                {/*클릭시 각각의 내용*/}
               <article>
                   <h2>HTML</h2>
                   HTML is HyperText Markup Language.
               </article>
            </div>
        );
    }
}

export default Content;