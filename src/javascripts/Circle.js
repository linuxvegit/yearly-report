import React from 'react';
import SizeUtil from './util/SizeUtils';
import '../stylesheets/circle.less';

/**
 * Properties
 * {string} color
 * {boolean} expand
 * {string} size
 * {string} width
 * {string} text
 *
 * Events
 * onExpanded
 */
export default class Circle extends React.Component {
  constructor(props) {
    super(props);
  }

  static getDefaultColor() {
    return 'red';
  }

  static getDefaultSize() {
    return '28px';
  }

  render() {
    let sizeStr = String(this.props.size || Circle.getDefaultSize());
    let size = SizeUtil.getValue(sizeStr);
    let unit = SizeUtil.getUnit(sizeStr) || 'px';

    if (this.props.expand && this.props.onExpanded) {
      setTimeout(() => this.props.onExpanded(), 300);
    }

    return (
        <div className='circle' style={this.getCircleStyle(size, unit)}>
          <div className='inner-circle' style={Circle.getInnerCircleStyle(size, unit)}>
            <div className='inner-point' style={Circle.getInnerPointStyle(size, unit)}/>
          </div>
          {this.props.expand && this.props.text != null && <label className="circle-text">{this.props.text}</label>}
        </div>
    );
  }

  getCircleStyle(size, unit) {
    let style = {
      height: size + unit,
      width: size + unit,
      minHeight: size + unit,
      minWidth: size + unit,
      borderRadius: (size / 2) + unit,
      background: this.props.color || Circle.getDefaultColor()
    };
    if (this.props.expand) {
      style.width = this.props.width;
    }
    return style;
  }

  static getInnerCircleStyle(size, unit) {
    const width = size / 7;
    const innerSize = size - width * 2;
    const innerContentSize = size - width * 4;
    return {
      height: innerContentSize + unit,
      maxHeight: innerContentSize + unit,
      width: innerContentSize + unit,
      maxWidth: innerContentSize + unit,
      borderRadius: innerSize / 2 + unit,
      marginLeft: width + unit,
      marginRight: width + unit,
      borderWidth: width + unit
    };
  }

  static getInnerPointStyle(size, unit) {
    const innerSize = size / 7;
    return {
      height: innerSize + unit,
      width: innerSize + unit,
      borderRadius: innerSize / 2 + unit
    };
  }


}