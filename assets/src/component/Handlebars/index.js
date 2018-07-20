import React, {Component} from 'react';
import Handlebars from 'handlebars'

export default class HandleBars extends Component<*, *> {

  render() {

    const templateString = Handlebars.compile(this.props.html)

    return (
      <div dangerouslySetInnerHTML={{__html: templateString(this.props.templateVars)}}/>
    )

  }
}
