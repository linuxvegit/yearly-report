import React from 'react';
import '../stylesheets/pic-browser.less';

// TODO only for test, remove them
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';

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
  }

  handlePicClick(e) {
    const classes = [...e.currentTarget.classList];
    if (classes.includes('left-picture')) {
      this.goLeft();
    } else if (classes.includes('right-picture')) {
      this.goRight();
    }
  }

  goLeft() {
    this.setState((pre, props) => ({currentPos: Math.max(0, pre.currentPos - 1)}));
  }

  goRight() {
    this.setState((pre, props) => ({currentPos: Math.min(this.getImages().length - 1, pre.currentPos + 1)}));
  }

  render() {
    return (
        <div className={'pic-browser'}>
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
    // TODO only for test, remove it
    return [img1, img2, img3, img4, img5, img6];
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