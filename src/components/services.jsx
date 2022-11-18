import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <section className="colorlib-services" data-section="services">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">What can I do?</span>
                            <h2 className="colorlib-heading">Programming languages and technologies</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3" data-animate-effect="fadeInLeft">
                            <div className="services color-1">
                                <span className="icon2"><i className="fi fi-bitcoin" /></span>
                                <h3>Node.JS</h3>
                            </div>
                        </div>
                        <div className="col-md-3" data-animate-effect="fadeInRight">
                            <div className="services color-2">
                                <span className="icon2"><i className="icon-data" /></span>
                                <h3>PostgreSQL</h3>
                            </div>
                        </div>
                        <div className="col-md-3" data-animate-effect="fadeInTop">
                            <div className="services color-3">
                                <span className="icon2"><i className="fi fi-laptop" /></span>
                                <h3>Python</h3>
                            </div>
                        </div>
                        <div className="col-md-3" data-animate-effect="fadeInBottom">
                            <div className="services color-4">
                                <span className="icon2"><i className="fi fi-code" /></span>
                                <h3>C++</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
