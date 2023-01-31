import { Component } from 'react';
import React from 'react';

class HelloName extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <h2>Hello {name}!</h2>
    );
  }
}

export default HelloName;