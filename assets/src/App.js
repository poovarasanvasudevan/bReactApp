import React, {Component} from 'react';
import Header from './component/Header'
import '../styles/application.css'
import '../styles/flexboxgrid.min.css'
import BreadCrump from "./component/BreadCrumps"
import {StickyContainer, Sticky} from 'react-sticky';
import {HashRouter, Route} from 'react-router-dom'
import PageModules from "./modules/PageModules"
import StartPage from "./page/StartPage"
import SignupPage from "./page/SignupPage"
import Util from "./misc/Util"

export default class App extends Component<*, *> {

  state = {
    header: true,
    breadcrump: []
  }

  constructor() {
    super()
  }


  render() {
    return (
      <HashRouter>
        <PageModules header={this.state.header} breadcrump={this.state.breadcrump}>
          <Route path="/" component={StartPage} exact={true}/>
          <Route path="/signup" component={SignupPage}/>
        </PageModules>
      </HashRouter>
    )
  }
}
