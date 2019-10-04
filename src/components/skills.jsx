import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Specialty</span>
                            <h2 className="colorlib-heading">My Skills</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" data-animate-effect="fadeInLeft">
                            {/* <p></p> */}
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>Node.JS</h3>
                                <div className="progress">
                                    <div className="progress-bar color-nodejs" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>Solidity</h3>
                                <div className="progress">
                                    <div className="progress-bar color-solidity" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>Bitcoin Blockchain</h3>
                                <div className="progress">
                                    <div className="progress-bar color-bitcoin" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>Ethereum Blockchain</h3>
                                <div className="progress">
                                    <div className="progress-bar color-ethereum" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>JavaScript</h3>
                                <div className="progress">
                                    <div className="progress-bar color-js" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }}>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>HTML</h3>
                                <div className="progress">
                                    <div className="progress-bar color-html" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '75%' }}>
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>CSS3</h3>
                                <div className="progress">
                                    <div className="progress-bar color-css" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{ width: '65%' }}>
                                        <span>65%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>PostgreSQL</h3>
                                <div className="progress">
                                    <div className="progress-bar color-postgresql" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }}>
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInLeft">
                            <div className="progress-wrap">
                                <h3>Python</h3>
                                <div className="progress">
                                    <div className="progress-bar color-python" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInRight">
                            <div className="progress-wrap">
                                <h3>C++</h3>
                                <div className="progress">
                                    <div className="progress-bar color-cpp" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{ width: '65%' }}>
                                        <span>65%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
