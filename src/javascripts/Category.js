import React from 'react';
import PicIcon from './PicIcon';
import '../stylesheets/category.less';

/**
 * Properties
 * {string} text
 * {string[]} images
 */
export default class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'category'}>
          <div>
            <label>{this.props.text}</label>
            {(this.props.images || []).length > 0 && <PicIcon size={'1rem'} images={this.props.images}/>}
          </div>
        </div>
    );
  }
}