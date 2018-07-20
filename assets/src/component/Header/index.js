import React, {Component} from 'react';
import {Logo} from "../Logo"
import LoginButton from "../LoginButton"
import {Link} from "react-router-dom"

export default class Header extends Component<*, *> {

  constructor() {
    super()
  }

  render() {
    return (
      <div
        className="lia-quilt-column-atl-navigation-column stuck">
        <div className="lia-quilt-column-alley lia-quilt-column-alley-single">
          <div className="atl-navigation-wrapper">
            <div className="atl-navigation">
              <div className="atl-navigation__masthead">
                <a href="/" className="atl-community-logo">
                  <Logo logoColor="#fff"/>
                </a>
              </div>
              <div className="atl-navigation__actions">
                <Link className="adg-button--cta-yellow " id="atlcommNavLink-register" to="/signup"> Sign up </Link>
                <LoginButton/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
