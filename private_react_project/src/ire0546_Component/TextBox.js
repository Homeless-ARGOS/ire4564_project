import React, { Component } from 'react';
import './Total.css';
import picture from './picture.png';

class TextBox extends Component {
    render() {
        return (
            <div id="TextBox">
                <div id="title_box">
                    {/*글 제목 표시하는 박스*/}
                    <h2 id="title_text">ARTICLE</h2>
                </div>
                <div id="desc_box2">
                    {/*글 내용 표시하는 박스*/}
                    <h2 id="title_text_article"> about this trip...</h2>
                    
                    {/*이미지 삽입하기*/}
                    <div id="put_image">
                        <img src={picture} id="picture"></img>
                    </div>
                    {/*글 내용 삽입하는 곳*/}
            
                    <div id="desc">
                        <h5 className="desc_texts">
                        This is my first trip.
                        It was really fun. I learned, saw, and felt many things.
                        </h5>
                        <h5 className="desc_texts">
                        I will definitely go if I have a chance next time.
                        </h5>
                        <h5 className="desc_texts">
                        I still have vivid memories. Jeremy Zucker's song suits these trips.
                        </h5>
                        <h5 className="desc_texts">
                        This is my first trip.
                        It was really fun. I learned, saw, and felt many things.
                        </h5>
                        <h5 className="desc_texts">
                        I will definitely go if I have a chance next time.
                        </h5>
                        <h5 className="desc_texts">
                        I still have vivid memories. Jeremy Zucker's song suits these trips.
                        </h5>
                        <h5 className="desc_texts">
                        This is my first trip.
                        It was really fun. I learned, saw, and felt many things.
                        </h5>
                        <h5 className="desc_texts">
                        I will definitely go if I have a chance next time.
                        </h5>
                        <h5 className="desc_texts">
                        I still have vivid memories. Jeremy Zucker's song suits these trips.
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextBox;