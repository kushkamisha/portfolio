import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <section className="colorlib-work" data-section="work">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Projects</span>
                            <h2 className="colorlib-heading">Recent Work</h2>
                        </div>
                    </div>
                    {/* <div className="row row-bottom-padded-sm" data-animate-effect="fadeInLeft">
                        <div className="col-md-12">
                            <p className="work-menu"><span><a href="#" className="active">Graphic Design</a></span> <span><a href="#">Web Design</a></span> <span><a href="#">Software</a></span> <span><a href="#">Apps</a></span></p>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-md-6" data-animate-effect="fadeInLeft">
                            <div className="project" style={{ backgroundImage: 'url(images/dex.jpg)' }}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="work.html">DEX+</a></h3>
                                        <span>A decentralized exchange platform for ERC721 - Ethereum - ERC20 exchanges managed by several smart contracts.</span>
                                        <p className="icon">
                                            <span><a href="https://github.com/kushkamisha/DEXplus" rel="noopener noreferrer" target="_blank"><i className="fi fi-github" /></a></span>
                                            {/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                            <span><a href="#"><i className="icon-heart" /> 49</a></span> */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInRight">
                            <div className="project" style={{ backgroundImage: 'url(images/beaver.jpg)' }}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="work.html">BitWallet</a></h3>
                                        <span>
                                            A Bitcoin wallet for IOS and Android. In this project, I was developing a Node.JS API for the wallet.<br></br>
                                            P.S. A beaver logo is also mine:)
                                        </span>
                                        <p className="icon">
                                            <span><a href="https://github.com/kushkamisha/bitcoin-wallet" rel="noopener noreferrer" target="_blank"><i className="fi fi-github" /></a></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInTop">
                            <div className="project" style={{ backgroundImage: 'url(images/betting.jpg)' }}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="work.html">BottleNeck</a></h3>
                                        <span>A betting service on Ethereum blockchain to ensure 100% reliability. The agreement process is based on the Delegated Proof Of Stake (DPOS).</span>
                                        <p className="icon">
                                            <span><a href="https://github.com/kushkamisha/bottleneck" rel="noopener noreferrer" target="_blank"><i className="fi fi-github" /></a></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInBottom">
                            <div className="project" style={{ backgroundImage: 'url(images/TeensyBarker.jpg)' }}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="work.html">Teensy-Barker</a></h3>
                                        <span>A utility for parsing restaurant web pages for searching and downloading any menu files from them.</span>
                                        <p className="icon">
                                            <span><a href="https://github.com/kushkamisha/Teensy-Barker" rel="noopener noreferrer" target="_blank"><i className="fi fi-github" /></a></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6" data-animate-effect="fadeInLeft">
                            <div className="project" style={{ backgroundImage: 'url(images/img-5.jpg)' }}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="work.html">Work 05</a></h3>
                                        <span>Graphic, Logo</span>
                                        <p className="icon">
                                            <span><a href="#"><i className="icon-share3" /></a></span>
                                            <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                            <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-animate-effect="fadeInRight">
                            <div className="project" style={{ backgroundImage: 'url(images/img-6.jpg)' }}>
                                <div className="desc">
                                    <div className="con">
                                        <h3><a href="work.html">Work 06</a></h3>
                                        <span>Web Design</span>
                                        <p className="icon">
                                            <span><a href="#"><i className="icon-share3" /></a></span>
                                            <span><a href="#"><i className="icon-eye" /> 100</a></span>
                                            <span><a href="#"><i className="icon-heart" /> 49</a></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p><a href="https://github.com/kushkamisha?tab=repositories" rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-lg btn-load-more">Show me more <i className="fi fi-angle-dobule-right" /></a></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
