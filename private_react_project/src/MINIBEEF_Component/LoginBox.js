import React, { Component } from 'react';
import './LoginBox.css'
class LoginBox extends Component {
    render() {
        return (
            <div id="LoginBox">
                <h3>Login</h3>
                <table>
                    <tr>
                        <td>id</td> <td><input type="text"/></td> <td><a href=".">register</a></td>
                    </tr>

                    <tr>
                        <td>pw</td> <td><input type="password"/></td> <td><a href=".">sign in</a></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default LoginBox