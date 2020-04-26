import React, { Component } from 'react';
import './Total.css';

class Textlist extends Component {
    render() {
        return (
            <div id="Textlist">
                <div id="title_box">
                    {/*글 제목 표시하는 박스*/}
                    <h3 id="title_text">TOTAL LIST</h3>
                </div>
                <div id="desc_box">
                    {/*글 내용 표시하는 박스*/}
                    <ul id="list_text">
                    <li class="line">and the star is explored and the</li>
                        <li class="line">my youth is yours</li>
                        <li class="line">about music</li>
                        <li class="line">Music is my life</li>
                        <li class="line">I don't want to go to trip</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Textlist;