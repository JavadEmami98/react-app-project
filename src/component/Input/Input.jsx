
import React, { Component } from 'react';
import OtpInput from 'react-otp-input';

export default class InputNum extends Component {
  state = { otp: '' };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span>&nbsp;&nbsp;</span>}
        inputStyle={{
          width: '38px',
          hight: '47px',          
        }}
      />
    );
  }
}