import React from 'react';
import '../stylesheets/pic-browser.less';

/**
 * Properties
 * {string[]} images
 *
 * Events
 * onClose
 */
export default class PicBrowser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPos: 0
    };

    this.handlePicClick = this.handlePicClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.onClose) {
      this.props.onClose(e);
    }
    e.stopPropagation();
    e.preventDefault();
  }

  handlePicClick(e) {
    const classes = [...e.currentTarget.classList];
    if (classes.includes('left-picture')) {
      this.goLeft();
    } else if (classes.includes('right-picture')) {
      this.goRight();
    }
    e.stopPropagation();
  }

  goLeft() {
    this.setState((pre, props) => ({currentPos: Math.max(0, pre.currentPos - 1)}));
  }

  goRight() {
    this.setState((pre, props) => ({currentPos: Math.min(this.getImages().length - 1, pre.currentPos + 1)}));
  }

  render() {
    return (
      <div className={'pic-browser'} onClick={this.handleClick} onContextMenu={this.handleClick}>
        <div className={'pic-browser-content'}>
          {this.getImages().map((image, index) => (
            <div className={this.getImageClass(index)} onClick={this.handlePicClick} key={index}>
              <img src={image} alt="image" className={'picture-img'}/>
            </div>
          ))}
        </div>
        <div className={'pic-browser-close'} onClick={this.props.onClose}>X</div>
      </div>
    );
  }

  getImages() {
    return this.props.images || [];
  }

  getImageClass(index) {
    if (index === this.state.currentPos) {
      return 'main-picture';
    } else if (index === this.state.currentPos - 1) {
      return 'left-picture';
    } else if (index === this.state.currentPos + 1) {
      return 'right-picture';
    } else if (index < this.state.currentPos) {
      return 'over-left-picture';
    } else {
      return 'over-right-picture';
    }
  }
}