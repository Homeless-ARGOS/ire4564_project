import React, { Component } from 'react';
import './Write.css';

class Write extends Component {
    render() {
        return (
            <div id="WriteForm">
                <h2>Write</h2>
                <h3>Fill the Form.</h3>
                <table id="WriteTable">
                    <tr>
                        <th scope="col">
                            Title:
                        </th>
                        <td>
                            <input type="text" placeholder='Input Title'></input>
                        </td>
                    </tr>
                    <tr>
                        <th scope="col">
                            Content:
                        </th>
                        <td>
                            <textarea id="ContentForm" type="text" placeholder='Input Content'></textarea>
                        </td>
                    </tr>
                </table>
                
                <button id="DoneB"><h4>Done!</h4></button>

            </div>
        )
    }
}

export default Write