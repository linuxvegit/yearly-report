import React from 'react';
import PicBrowser from './PicBrowser';
import icon from '../images/pic.svg';
import '../stylesheets/pic-icon.less';

// TODO only for test, remove them
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';

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
    // TODO only for test, remove it
    return this.props.images || [img1, img2, img3, img4, img5, img6];
  }

  /*---------------------Properties with default value---------------------------*/
  getSize() {
    return this.props.size || '1rem';
  }
};