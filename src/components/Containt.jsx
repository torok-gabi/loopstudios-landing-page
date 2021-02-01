import React from 'react';
import "./containt.css";


const Containt = () => {
    
    return (
        <div className="main-container">
            <h2 className="subtitle">Our creations</h2>
            <button className="desktop-btn">See all</button>
            <div className="img-container">
                <article className="containt">
                    <div className=" earth"></div>
                    <h3>Deep earth</h3>
                </article>
                <article className="containt">
                    <div className=" arcade"></div>
                    <h3>Night arcade</h3>
                </article>
                <article className="containt">
                    <div className=" soccer"></div>
                    <h3>Soccer team VR</h3>
                </article>
                <article className="containt">
                    <div className="grid"></div>
                    <h3>The grid</h3>
                </article>
                <article className="containt">
                    <div className="above"></div>
                    <h3>From up above VR</h3>
                </article>
                <article className="containt">
                <div className="borealis"></div>
                    <h3>Pocket borealis</h3>
                </article>
                <article className="containt">
                    <div className="curiosity"></div>
                    <h3>The curiosity</h3>
                </article>
                <article className="containt">
                    <div className="fish"></div>
                    <h3>Make it fisheye</h3>
                </article>
                <button className="mobil-btn">See all</button>
            </div>
        </div>
    )
}

export default Containt;
