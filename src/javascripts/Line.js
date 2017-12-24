import React from 'react';
import '../stylesheets/line.less';

/**
 * Properties
 * {string} width e.g. '50px' default '50px'
 * {string} color e.g. 'red' or '#333' default 'red'
 */
export default class Line extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'line'} style={{
          width: this.getWidth(),
          background: this.getColor()
        }}/>
    );
  }

  /*---------------------Properties with default value---------------------------*/
  getWidth() {
    return this.props.width || '50px';
  }

  getColor() {
    return this.props.color || 'red';
  }
}
