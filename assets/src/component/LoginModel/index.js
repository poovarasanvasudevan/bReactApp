import React, {Component} from 'react';


export default class LoginModel extends Component<*, *> {

  render() {
    return (
      <Modal actions={this.props.actions} onClose={this.props.close} heading="Login">

      </Modal>
    )
  }
}
