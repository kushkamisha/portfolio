import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                        <li style={{ backgroundImage: 'url(images/cover.jpg)' }}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                                <h1 style={{ color: 'white' }}>Hi! <br />I'm Misha</h1>
                                                <h2 style={{color: 'white'}}>Blockchain developer located in Kyiv, Ukraine</h2>
                                                <p><a className="btn btn-primary btn-learn" href="files/Misha Kushka.pdf" rel="noopener noreferrer" target="_blank">Download CV <i className="icon-download4" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <li style={{ backgroundImage: 'url(images/nothingHere.jpg)' }}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <h1>I am <br />a Blockchain developer</h1>
                                                <h2></h2>
                                                <p><a className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </section>
        )
    }
}
