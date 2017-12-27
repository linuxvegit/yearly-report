import React from 'react';
import PicBrowser from './PicBrowser';
import icon from '../images/pic.svg';
import '../stylesheets/pic-icon.less';

/**
 * Properties
 * {string} size e.g. '25px' default '1rem' the size of the picture icon
 * {string[]} images
 * {color} color default '#000'
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
        {/*<img src={icon} alt="Images" style={this.getIconStyle()} onClick={this.handleIconClick}/>*/}
        <svg className="icon" style={this.getIconStyle()} viewBox="0 0 1024 1024" version="1.1"
             width="128" height="128" onClick={this.handleIconClick}>
          <defs>
            <style type="text/css"/>
          </defs>
          <path style={this.getPathStyle()}
                d="M475.224371 575.792506 440.035586 579.864725 667.59114 724.380853 683.870889 734.719806 699.396883 723.24605 1012.285773 492.020243 1024 483.363394 1024 468.645161 1024 208.704131C1024 128.805961 960.311036 64 881.771738 64L28.444444 64 0 64 0 92.903226 0 815.429577C0 895.261382 63.696326 960 142.228263 960L995.555556 960 1024 960 1024 931.096774 1024 670.967742C1024 655.00493 1011.264988 642.064516 995.555556 642.064516 979.846123 642.064516 967.11111 655.00493 967.11111 670.967742L967.11111 931.096774 995.555556 902.193549 142.228263 902.193549C95.11813 902.193549 56.888889 863.338746 56.888889 815.429577L56.888889 92.903226 28.444444 121.806452 881.771738 121.806452C928.874507 121.806452 967.11111 160.713662 967.11111 208.704131L967.11111 468.645161 978.825338 445.27008 665.93645 676.495887 697.742193 675.361082 470.186637 530.844951 450.998204 518.65875 434.997852 534.917171 207.442296 766.142978C196.334049 777.430389 196.334049 795.730901 207.442296 807.018313 218.550543 818.305724 236.56057 818.305724 247.668815 807.018313L475.224371 575.792506Z"/>
          <path style={this.getPathStyle()}
                d="M341.333333 338.580644C341.333333 282.710807 296.760794 237.419355 241.777777 237.419355 186.794763 237.419355 142.222222 282.710807 142.222222 338.580644 142.222222 394.450483 186.794763 439.741935 241.777777 439.741935 296.760794 439.741935 341.333333 394.450483 341.333333 338.580644ZM199.111111 338.580644C199.111111 314.636429 218.213628 295.225807 241.777777 295.225807 265.341926 295.225807 284.444444 314.636429 284.444444 338.580644 284.444444 362.524862 265.341926 381.935484 241.777777 381.935484 218.213628 381.935484 199.111111 362.524862 199.111111 338.580644Z"/>
        </svg>
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

  getPathStyle() {
    return {
      fill: this.getColor()
    };
  }

  getImages() {
    return this.props.images || [];
  }

  /*---------------------Properties with default value---------------------------*/
  getSize() {
    return this.props.size || '1rem';
  }

  getColor() {
    return this.props.color || '#000';
  }
};