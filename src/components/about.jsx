import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">About Me</span>
                                        <h2 className="colorlib-heading">Who Am I?</h2>
                                        <p><strong>I'm Misha Kushka</strong> – an enthusiastic Blockchain developer. Currently working towards my Master's degree in Software Engineering at the National University of "Kyiv-Mohyla Academy" in Kyiv, Ukraine</p>
                                        {/* <p></p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row row-pt-md">
                                <div className="col-md-4 text-center">
                                    <div className="services long color-4">
                                        <span className="icon">
                                            <i className="icon-data" />
                                        </span>
                                        <div className="desc">
                                            <h3>Databases</h3>
                                            <p>I have work experience in both SQL (PostgreSQL, MariaDB) and NoSQL (MongoDB) databases. I also have skills in designing databases.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="services long color-5">
                                        <span className="icon">
                                            <i className="fi fi-laptop" />
                                        </span>
                                        <div className="desc">
                                            <h3>Linux</h3>
                                            <p>I can work in the bash command line to develop, deploy, or monitor applications on a local computer or a server.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="services long color-6">
                                        <span className="icon">
                                            <i className="fi fi-code" />
                                        </span>
                                        <div className="desc">
                                            <h3>Web Development</h3>
                                            <p>I have some experience in creating full-stack applications on Node.JS and JS.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="services long color-1">
                                        <span className="icon">
                                            <i className="fi fi-bitcoin" />
                                        </span>
                                        <div className="desc">
                                            <h3>Blockchain</h3>
                                            <p>I like to play around with blockchain technology. I know how Bitcoin works under the hood along with different types of consensus, such as PoW, PoS, DPoS.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="services long color-2">
                                        <span className="icon">
                                            <i className="fi fi-file-1" />
                                        </span>
                                        <div className="desc">
                                            <h3>Smart Contracts</h3>
                                            <p>I've developed various smart contracts created from scratch for Ethereum blockchain.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="services long color-3">
                                        <span className="icon">
                                            <img src="images/coin.png" style={{ margin: '7px', width: '36px' }} alt="coin" />
                                        </span>
                                        <div className="desc">
                                            <h3>Tokens</h3>
                                            <p>I created several types of tokens (ERC20 and ERC721).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-md-12" data-animate-effect="fadeInLeft">
                                    <div className="hire">
                                        <h2>I am happy to know <br />that 300+ projects done sucessfully!</h2>
                                        <a href="/" className="btn-hire">Hire me</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
