import React from 'react';
import '../stylesheets/line.less';

/**
 * Properties
 * {string} width e.g. '50px'
 * {string} color e.g. 'red' or '#333'
 */
export default class Line extends React.Component {
  constructor(props) {
    super(props);
  }

  static getDefaultWidth() {
    return '50px';
  }

  static getDefaultColor() {
    return 'red';
  }

  render() {
    return (
        <div className={'line'} style={{
          width: this.props.width || Line.getDefaultWidth(),
          background: this.props.color || Line.getDefaultColor()
        }}/>
    );
  }
}
