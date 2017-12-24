import React from 'react';
import Category from './Category';
import '../stylesheets/categories.less';

/**
 * Properties
 * {'top'|'bottom'} expand
 * {left: string, top: string} offset e.g. {left: '16px'}
 * {height: string, width: string} size e.g. {height: '100px'}
 */
export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'categories'} style={this.getStyle()}>
          <Category text={'Test Category'}/>
          <Category text={'Test Category Image'} images={['1', '2']}/>
        </div>
    );
  }

  getStyle() {
    const {left = '0', top = '0'} = this.props.offset || {};
    const {width = '0', height = '0'} = this.props.size || {};
    return {
      left: left,
      width: width,
      top: this.props.expand === 'bottom' ? '0' : top,
      height: this.isExpand() ? height : '0'
    };
  }

  isExpand() {
    return this.props.expand === 'top' || this.props.expand === 'bottom';
  }
}