import React from 'react';
import Category from './Category';
import '../stylesheets/categories.less';

/**
 * Properties
 * {!Category[]} data
 * {'top'|'bottom'} expand
 * {left: string, top: string} offset e.g. {left: '16px'} default {left: '0', top: '0'}
 * {height: string, width: string} size e.g. {height: '100px'} default {height: '0', width: '0'}
 */
export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'categories'} style={this.getStyle()}>
          {
            this.props.data.map((category, index) => (
                <Category text={category.getTitle()} images={category.getImages()} key={index}/>
            ))
          }
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