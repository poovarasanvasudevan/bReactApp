import React, {Component} from 'react';
import Button from '@atlaskit/button';
import Modal from '@atlaskit/modal-dialog'
import FieldText from '@atlaskit/field-text';

type State = {
  isOpen: boolean,
};

export default class LoginButton extends Component<*, *> {

  state: State = {isOpen: false};
  open = () => this.setState({isOpen: true});
  close = () => this.setState({isOpen: false});


  render() {
    const {isOpen} = this.state;
    const actions = [
      {text: 'Close', onClick: this.close},
      {text: 'Secondary Action', onClick: this.secondaryAction},
    ];

    return (
      <div>
        <a onClick={this.open} className="adg-button--subtle" id="atlcommNavLink-login"> Log in </a>

        {isOpen && (
          <Modal
            onClose={this.close}
            width={800}>
            <div className="row" style={{paddingTop: "30px", paddingBottom: "30px"}}>

              <div className="col-md-6" style={{borderRight: "1px solid rgba(0,0,0,0.1)"}}>
                <span className="adg-u-text-center"><h3>I Dont't Have an Account</h3></span>
                <div>
                  <div className="padding15 adg-u-center">
                    <button className="adg-button--cta-yellow">Sign up</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{height: "50%", padding: "30px"}}>
                <form method="post" action="#">
                  <FieldText
                    label="Username"
                    required
                    autocomplete="off"
                    shouldFitContainer
                    style={{width: "100vh"}}
                    name="username"
                  />

                  <FieldText
                    label="Password"
                    required
                    type="password"
                    autocomplete="off"
                    shouldFitContainer
                    style={{width: "100vh"}}
                    name="password"
                  />

                  <div style={{padding: "10px 0px 0px 0px"}}>
                    <button className="adg-button--primary adg-u-float-right"> Sign In</button>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        )}
      </div>
    )
  }
}
