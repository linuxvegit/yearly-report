import React from 'react';
import ReactDom from 'react-dom';
import icon from '../images/pic.svg';
import '../stylesheets/pic-icon.less';

export default class PicIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
        <img src={icon} className="pic-icon" alt="Images"/>
    );
  }
};