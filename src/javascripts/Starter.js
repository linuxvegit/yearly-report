import React from 'react';
import Line from './Line';
import '../stylesheets/starter.less';

/**
 * Properties:
 * {string} color e.g. 'red' or '#333' the color of the starter
 * {string} text  e.g. 'Hello World'   the text to be shown at the beginning
 */
export default class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      original: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  static getDefaultColor() {
    return 'cadetblue';
  }

  handleClick() {
    this.setState({
      original: false
    });
  }

  render() {
    return (
        <div className='starter' onClick={this.handleClick}>
          <div className={'point ' + (this.state.original ? 'original' : '')}
               style={{background: this.props.color || Starter.getDefaultColor()}}>
            {this.state.original && <label className='label'>{this.props.text}</label>}
          </div>
          <Line color={this.props.color || Starter.getDefaultColor()}/>
        </div>
    );
  }
}