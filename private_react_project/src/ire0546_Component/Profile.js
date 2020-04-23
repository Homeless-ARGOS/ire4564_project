import React, { Component } from 'react';
import logo from './profile.png';
import Kategorie from './Kategorie'
import './Total.css';

class Profile extends Component {
    render() {
        return (
            <div id="Profile">
                <div id="infoSpace">
                    <img src={logo} id="pro_image"></img>
                    <div id="pro_id">
                        <h3>ire_0546</h3>
                        <div id="desc">
                            <h5>always I'll care</h5>
                            <h5>Jeremy Zucker </h5>
                        </div>
                    </div>

                    <Kategorie></Kategorie>


                    <div id="ect">
                        <h5>like♥ 90</h5>
                        <h5>reple 200</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile