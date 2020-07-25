/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section className="colorlib-contact" data-section="contact">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Get in Touch</span>
                            <h2 className="colorlib-heading">Contact</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="colorlib-feature colorlib-feature-sm" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-globe-outline" />
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="mailto:kushkamisha@yahoo.com">kushkamisha@yahoo.com</a></p>
                                </div>
                            </div>
                            {/* <div className="colorlib-feature colorlib-feature-sm" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-map" />
                                </div>
                                <div className="colorlib-text">
                                    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                                </div>
                            </div> */}
                            {/* <div className="colorlib-feature colorlib-feature-sm" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="icon-phone" />
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="tel://">+123 456 7890</a></p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div> 
            </section>
        )
    }
}
