import React from 'react';
import PicBrowser from './PicBrowser';
import icon from '../images/pic.svg';
import '../stylesheets/pic-icon.less';

/**
 * Properties
 * {string} size e.g. '25px' default '1rem' the size of the picture icon
 * {string[]} images
 */
export default class PicIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBrowser: false
    };

    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleBrowserClose = this.handleBrowserClose.bind(this);
  }

  handleIconClick(e) {
    this.setState({
      showBrowser: true
    });
    e.stopPropagation();
  }

  handleBrowserClose(e) {
    this.setState(pre => pre.showBrowser ? {showBrowser: false} : {});
    e.stopPropagation();
  }

  render() {
    return (
        <div className={'pic-icon'}>
          <img src={icon} alt="Images" style={this.getIconStyle()} onClick={this.handleIconClick}/>
          {this.state.showBrowser && <PicBrowser onClose={this.handleBrowserClose} images={this.getImages()}/>}
        </div>
    );
  }

  getIconStyle() {
    const size = this.getSize();
    return {
      width: size,
      height: size
    };
  }

  getImages() {
    return this.props.images || [];
  }

  /*---------------------Properties with default value---------------------------*/
  getSize() {
    return this.props.size || '1rem';
  }
};