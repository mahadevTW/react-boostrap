import React from "react";
import Button from 'react-bootstrap/lib/Button'

export default class Wrapper extends React.Component {
  render() {
    return (
      <div>Hello World
        <Button bsStyle='success'>Click Me</Button>
      </div>
    )
  }
}