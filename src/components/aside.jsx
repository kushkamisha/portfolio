/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Aside extends Component {
  render() {
      return (
          <div>
              <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
              <div id="colorlib-aside" role="complementary" className="border js-fullheight">
                  <div className="text-center">
                      <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                      <h1 id="colorlib-logo"><a href="index.html">Misha Kushka</a></h1>
                      <span className="position">Kyiv, Ukraine</span>
                  </div>
                  <nav id="colorlib-main-menu" role="navigation" className="navbar">
                      <div id="navbar" className="collapse">
                          <ul>
                              <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                              <li><a href="#" data-nav-section="about">About</a></li>
                              {/* <li><a href="#" data-nav-section="services">Services</a></li> */}
                              <li><a href="#" data-nav-section="skills">Skills</a></li>
                              <li><a href="#" data-nav-section="education">Education</a></li>
                              <li><a href="#" data-nav-section="experience">Experience</a></li>
                              <li><a href="#" data-nav-section="work">Projects</a></li>
                              {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                              <li><a href="#" data-nav-section="contact">Contact</a></li>
                          </ul>
                      </div>
                  </nav>
                  <div className="colorlib-footer">
                      <p><small>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                          Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</small></p>
                      <ul>
                          <li><a href="https://github.com/kushkamisha" rel="noopener noreferrer" target="_blank"><i className="big icon-github"></i></a></li>
                          <li><a href="https://t.me/mishakushka" rel="noopener noreferrer" target="_blank"><i className="big icon-telegram"></i></a></li>
                          <li><a href="https://www.facebook.com/kushka.misha" rel="noopener noreferrer" target="_blank"><i className="big icon-facebook2" /></a></li>
                          <li><a href="https://www.linkedin.com/in/misha-kushka-60787312b/" rel="noopener noreferrer" target="_blank"><i className="big icon-linkedin2" /></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      )
  }
}