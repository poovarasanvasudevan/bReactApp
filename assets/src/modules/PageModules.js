import BreadCrump from "../component/BreadCrumps"
import {StickyContainer, Sticky} from 'react-sticky';
import React, {Component} from 'react';
import Header from "../component/Header"
import Util from "../misc/Util"

export default class PageModules extends Component<*, *> {

  state = {
    breadcrump: [],
    header: true
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);
  }

  componentDidMount() {
    const unsub = Util.bus().take(Util.PAGE_CHANNEL, (msg) => {
      this.setState(msg)
      console.log(msg)
    })
  }

  render() {
    return (
      <StickyContainer>

        {this.state.header ?
          <Sticky>
            {({
                style,
                isSticky,
                wasSticky,
                distanceFromTop,
                distanceFromBottom,
                calculatedHeight
              }) => (

              <header style={style}>
                <Header/>
              </header>
            )}
          </Sticky>
          : null}
        <div>
          <section>
            {(this.state.breadcrump && this.state.breadcrump.length > 0) ?
              <BreadCrump dataList={this.state.breadcrump}/>
              : null}
            <main className="container main-container">
              {this.props.children}
            </main>
          </section>
        </div>
      </StickyContainer>
    )
  }
}
