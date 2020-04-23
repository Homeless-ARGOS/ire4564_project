import React, { Component } from 'react';
import './Content.css'

class Content extends Component {
    render() {
        return (
            <div id="Content">
                <h2>Conference</h2>
                <h3>Click on Img and go to the Conference site.</h3>
                <table id="Table">
                    <tr>
                        <td><h4>{this.props.c_name1}</h4></td>
                        <td><h4>{this.props.c_name2}</h4></td>
                        <td><h4>{this.props.c_name3}</h4></td>
                    </tr>
                    <tr>
                        <Cell link={this.props.link1} c_img={this.props.c_img1}></Cell>
                        <Cell link={this.props.link2} c_img={this.props.c_img2}></Cell>
                        <Cell link={this.props.link3} c_img={this.props.c_img3}></Cell>
                    </tr>
                </table>
            </div>
        )
    }
}

class Cell extends Component {
    render() {
        return (
            <td><a href={this.props.link}><img  alt="Conference Imgae" src={this.props.c_img}></img></a></td>
        )
    }
}
export default Content