import React from 'react';
import { Button } from 'react-bootstrap';
import { hashHistory } from 'react-router';

class SignupButton extends React.Component {
  constructor() {
    super();

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e){
    e.preventDefault();
    console.log('handleddd login');
    hashHistory.push('/signup');
  }

render() {
  return (
      <div>
        <Button onClick={this.handleSignup}>Sign Up</Button>
      </div>
    );
  }
}

export default SignupButton;
