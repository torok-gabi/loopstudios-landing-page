import React from 'react';
import vr from "./images/image-interactive.jpg";
import "./vr.css";

const VR = () => {
    return (
        <div className="vr-container">
            <img className="vr-img" src={vr} alt="VR szemüveg kép"/>
            <aside className="vr-right">
                <h2 className="subtitle">The leader in interactive VR</h2>
                <p className="text">Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.
                </p>
            </aside>
        </div>
    )
}

export default VR;
