import React from 'react';
import '../stylesheets/categories.less';

/**
 * Properties
 * {'top'|'bottom'} expand
 * {left: string, top: string} offset e.g. {left: '16px'}
 * {height: string, width: string} size e.g. {height: '100px'}
 */
export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'categories'} style={this.getStyle()}>
          {`This is a very long text
          Contineru
          s
          fa
          d
          fa
          df
          ad
          f
          a
          df
          a
          df
          a
          df
          a
          sf
          a
          dsf

          dfasd
          f
          asd
          f
          adf
          adffffffffffffffffffffffffffffffffffffffffffffa
          sf
          as
          df
          a`}
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