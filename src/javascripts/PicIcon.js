import React from 'react';
import PicBrowser from './PicBrowser';
import icon from '../images/pic.svg';
import '../stylesheets/pic-icon.less';

/**
 * Properties
 * {string} size e.g. '25px' the size of the picture icon
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
        <div>
          <img src={icon} className="pic-icon" alt="Images" style={this.getIconStyle()} onClick={this.handleIconClick}/>
          {this.state.showBrowser && <PicBrowser onClose={this.handleBrowserClose}/>}
        </div>
    );
  }

  getIconStyle() {
    const {size = '25px'} = this.props;
    return {
      width: size,
      height: size
    };
  }
};