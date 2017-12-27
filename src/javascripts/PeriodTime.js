import React from 'react';
import SizeUtils from './util/SizeUtils';
import ColorUtils from './util/ColorUtils';
import '../stylesheets/period-time.less';

/**
 * Properties
 * {'top'|'bottom'} expand      the direction of expand
 * {string} text   e.g. 'Some Title' the title to be shown beside left line
 * {string} color  e.g. 'red' or '#333' default 'red' the color left line
 * {string} height e.g. '100px' default '300px' the height after expand
 * {string} size   e.g. '25px' default '28px'  the size(height) of child component title
 *
 * Events
 * onExpanded
 */
export default class PeriodTime extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.isExpand() && this.props.onExpanded) {
      setTimeout(() => this.props.onExpanded(), 300);
    }

    return (
      <div className={'period-time'} style={this.getStyle()}>
        {this.props.text && this.props.expand === 'bottom' &&
        <label className={'period-time-text'} style={this.getTimeStyle()}>{this.props.text}</label>}
        {this.props.children}
        {this.props.text && this.props.expand === 'top' &&
        <label className={'period-time-text'} style={this.getTimeStyle()}>{this.props.text}</label>}
      </div>
    )
  }

  getStyle() {
    const height = this.getHeight();
    let style = {
      color: ColorUtils.lightenDarkenColor(this.getColor(), -40),
    };

    if (this.isExpand()) {
      Object.assign(style, {
        height: height,
        [this.props.expand]: '-' + height,
        justifyContent: this.props.expand === 'top' ? 'flex-start' : 'flex-end'
      });
    } else {
      Object.assign(style, {
        height: this.getSize() || 'auto',
        top: '0',
        bottom: '0'
      });
    }

    const size = SizeUtils.getValue(this.getSize()) / 2 + (SizeUtils.getUnit(this.getSize()) || 'px');
    style.backgroundImage = `linear-gradient(90deg, transparent calc(${size} - 1px), ${this.getColor()} calc(${size} - 1px), ${this.getColor()} calc(${size} + 1px), transparent calc(${size} + 1px))`;

    return style;
  }

  getTimeStyle() {
    const size = SizeUtils.getValue(this.getSize()) || 0;
    const unit = SizeUtils.getUnit(this.getSize()) || 'px';
    const height = SizeUtils.getValue(this.getHeight());
    const heightUnit = SizeUtils.getUnit(this.getHeight()) || 'px';
    const width = `calc(${height + heightUnit} - ${size + unit})`;
    return {
      width: width,
      maxWidth: width,
      left: `calc(${size + unit} - ${height / 2 + heightUnit} - 1px - 1rem)`,
      [this.props.expand]: `calc(${height / 2 + heightUnit} - ${size / 2 + unit} - 1rem)`
    };
  }

  isExpand() {
    return this.props.expand === 'top' || this.props.expand === 'bottom';
  }

  /*---------------------Properties with default value---------------------------*/
  getColor() {
    return this.props.color || 'red';
  }

  getHeight() {
    return this.props.height || '300px';
  }

  getSize() {
    return this.props.size || '28px';
  }

}