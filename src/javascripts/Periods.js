import React from 'react';
import Period from './Period';
import '../stylesheets/periods.less';

/**
 * Properties
 * {!Period[]} data
 * {!number} index
 * {string} lineWidth e.g. `50px` default '50px'
 * {string} contentWidth e.g. `100px` default '500px'
 * {string} contentHeight e.g. `200px` default '300px'
 * {string} titleSize e.g. '25px'  default '28px'
 */
export default class Periods extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'periods'}>
        {this.props.data.map((period, index) => (
          <Period data={period} expandDirection={Periods.getExpandDirection(index)} expand={index <= this.props.index}
                  lineWidth={this.getLineWidth()} contentWidth={this.getContentWidth()}
                  contentHeight={this.getContentHeight()} titleSize={this.getTitleSize()} key={index}/>
        ))}
      </div>
    );
  }

  static getExpandDirection(index) {
    return index % 2 === 0 ? 'top' : 'bottom'
  }

  /*---------------------Properties with default value---------------------------*/

  getLineWidth() {
    return this.props.lineWidth || '50px';
  }

  getTitleSize() {
    return this.props.titleSize || '28px';
  }

  getContentHeight() {
    return this.props.contentHeight || '300px';
  }

  getContentWidth() {
    return this.props.contentWidth || '500px';
  }
}