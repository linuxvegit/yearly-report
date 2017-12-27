import React from 'react';
import PicIcon from './PicIcon';
import '../stylesheets/category.less';

/**
 * Properties
 * {string} text
 * {string[]} images
 * {string} color default '#000'
 */
export default class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'category'}>
        <div>
          <label style={{color: this.getColor()}}>{this.props.text}</label>
          {(this.props.images || []).length > 0 &&
          <PicIcon size={'1rem'} images={this.props.images} color={this.props.color}/>}
        </div>
      </div>
    );
  }

  getColor() {
    return this.props.color || '#000';
  }
}