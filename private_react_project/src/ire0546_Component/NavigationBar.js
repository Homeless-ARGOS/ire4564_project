import React, { Component } from 'react';
import './Total.css';

class NavigationBar extends Component {
    render() {
        return (
            <div id="NavigationBar">
                 <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;700;800&display=swap" rel="stylesheet"></link>
                {/*<img src={logo} id="logo"></img>*/}

                <h1 id="titles">ABOUT ME</h1>

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