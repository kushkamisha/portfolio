import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <section className="colorlib-experience" data-section="experience">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Experience</span>
                            <h2 className="colorlib-heading">Work Experience</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="timeline-centered">
                                <article className="timeline-entry" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-1">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="http://1studioviz.com">Full Stack Developer at Family Nest</a> <span>06/2015–09/2015</span></h2>
                                            {/* <p>...</p> */}
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry" data-animate-effect="fadeInRight">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-2">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="/">Bitcoin Blockchain Developer freelance</a> <span>09/2016–10/2016</span></h2>
                                            {/* <p>...</p> */}
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-3">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="/">Web Developer / Blockchain Developer at BitRent</a> <span>10/2017–05/2018</span></h2>
                                            {/* <p>...</p> */}
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry" data-animate-effect="fadeInTop">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-4">
                                            <i className="icon-pen2" />
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="/">Ethereum Blockchain developer at Bank4You</a> <span>11/2017–08/2018</span></h2>
                                            {/* <p>...</p> */}
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry begin" data-animate-effect="fadeInBottom">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-none">
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
