import React from 'react';
import Wrapper from './components/Wrapper'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Wrapper/>
      </div>
    );
  }
}