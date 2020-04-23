import React, { Component } from 'react';
import './Total.css';

class Kategorie extends Component {
    render() {
        return (
         <div id="Kategorie">
             <div id="Detail">
               <h3 className="kata_big">STUDY</h3>
                    <h2 className="kata_small">▷Algorithm</h2>
                    <h2 className="kata_small">▶Database</h2>
                    <h2 className="kata_small">▷Web</h2>
                    <h2 className="kata_small">▶OS/SW</h2>
               <h3 className="kata_big">HOBBY</h3>
                    <h2 className="kata_small">▷Painting</h2>
                    <h2 className="kata_small">▶Music</h2>
               <h3 className="kata_big">DAILY</h3>
                    <h2 className="kata_small">▶Talk</h2>
                    <h2 className="kata_small">▷book&Trip</h2>
             </div>
         </div>
        )
    }
}

export default Kategorie