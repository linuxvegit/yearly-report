import React from 'react';
import Circle from './Circle';
import Line from './Line';
import '../stylesheets/period-line.less';

/**
 * Properties
 * {string} color  e.g. 'red' or '#333'
 * {string} size   e.g. '25px'
 * {string} lineWidth e.g. '50px'
 */
export default class PeriodLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'period-line'}>
          <Circle color={this.props.color} size={this.props.size}/>
          <Line color={this.props.color} width={this.props.lineWidth}/>
        </div>
    );
  }
}