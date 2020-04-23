import React, { Component } from 'react';
import './Total.css';
import logo from './argosLogo.png';


class NavigationBar extends Component {
    render() {
        return (
            <div id="NavigationBar">
                {/*<img src={logo} id="logo"></img>*/}

                <h1>ABOUT ME</h1>

                <nav>
                    <ul class="container">
                        <li class="nav"><a href="">ABOUT</a></li>
                        <li class="nav"><a href="">LIST</a></li>
                        <li class="nav"><a href="">PHOTO</a></li>
                        <li class="nav"><a href="">SNS</a></li>
                    </ul>
                </nav>
        </div>
        )
    }
}

export default NavigationBar