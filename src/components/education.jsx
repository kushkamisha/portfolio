import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <section className="colorlib-education" data-section="education">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Education</span>
                            <h2 className="colorlib-heading">Education and Training</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" data-animate-effect="fadeInLeft">
                            <div className="fancy-collapse-panel">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingOne">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Student for bachelor degree (4th year)</a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div className="panel-body">
                                                <p>
                                                    I'm a fourth-year student and a group leader at the National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute" located in Kyiv, Ukraine. My future specialty is Software Engineering.<br></br>
                                                    <b>Faculty:</b> FICT<br></br>
                                                    <b>Specialization:</b> Software Engineering
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">High school secondary education</a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div className="panel-body">
                                                <p>The 145th Natural Science Lyceum</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Leadership</a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div className="panel-body">
                                                <p>I was a Team leader of the Youth Committee in the U-Report project launched by UNICEF from 03/2017 to 08/2017.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFour">
                                            <h4 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Volunteering</a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                            <div className="panel-body">
                                                <p>I was a volunteer in one of the UNICEF projects called U-Report from 05/2016 to 08/2017.</p>
                                            </div>
                                        </div>
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
