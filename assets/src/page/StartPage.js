import React, {Component} from 'react';
import Util from "../misc/Util"

export default class StartPage extends Component<*, *> {

  constructor() {
    super()
  }

  componentDidMount() {
    Util.bus().send(Util.PAGE_CHANNEL, {header: false});
  }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}
