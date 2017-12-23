import React from 'react';
import Starter from './Starter';
import Periods from './Periods';
import '../stylesheets/container.less';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div className="container">
          <Starter text='Hello!'/>
          <Periods/>
        </div>
    );
  }
}