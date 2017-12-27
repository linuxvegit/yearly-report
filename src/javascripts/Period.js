import React from 'react';
import Circle from './Circle';
import PeriodLine from './PeriodLine';
import PeriodTime from './PeriodTime';
import Categories from './Categories';
import '../stylesheets/period.less';
import ColorUtils from "./util/ColorUtils";

/**
 * Properties
 * {!Period} data
 * {'top'|'bottom'} expandDirection
 * {boolean} expand
 * {string} lineWidth e.g. `50px` default '50px'
 * {string} contentWidth e.g. `100px` default '500px'
 * {string} contentHeight e.g. `200px` default '300px'
 * {string} titleSize e.g. '25px'  default '28px'
 */
export default class Period extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeExpanded: false,
      circleExpanded: false,
      textExpand: ''
    };

    this.handleTimeExpanded = this.handleTimeExpanded.bind(this);
    this.handleCircleExpanded = this.handleCircleExpanded.bind(this);
  }

  handleTimeExpanded() {
    if (!this.state.timeExpanded) {
      this.setState({
        timeExpanded: true
      });
    }
  }

  handleCircleExpanded() {
    if (!this.state.circleExpanded) {
      this.setState({
        circleExpanded: true,
        textExpand: this.getExpandDirection()
      });
    }
  }

  render() {
    return (
      <div className={'period'}>
        <PeriodTime size={this.getTitleSize()} height={this.props.contentHeight}
                    expand={this.props.expand ? this.getExpandDirection() : ''}
                    color={this.props.data.getColor()} onExpanded={this.handleTimeExpanded}
                    text={this.props.data.getTime()}>

          {this.getExpandDirection() === 'bottom' &&
          <Categories expand={this.state.textExpand} offset={this.getCategoriesOffset()}
                      size={this.getCategoriesSize()} data={this.props.data.getCategories()}
                      color={ColorUtils.lightenDarkenColor(this.props.data.getColor(), -20)}/>}

          <Circle size={this.getTitleSize()} expand={this.state.timeExpanded} width={this.getContentWidth()}
                  text={this.props.data.getTitle()} onExpanded={this.handleCircleExpanded}
                  color={this.props.data.getColor()}/>

          {this.getExpandDirection() === 'top' &&
          <Categories expand={this.state.textExpand} offset={this.getCategoriesOffset()}
                      size={this.getCategoriesSize()} data={this.props.data.getCategories()}
                      color={ColorUtils.lightenDarkenColor(this.props.data.getColor(), -20)}/>}

        </PeriodTime>
        <PeriodLine size={this.getTitleSize()} color={this.props.data.getColor()} lineWidth={this.props.lineWidth}/>
      </div>
    );
  }

  getCategoriesOffset() {
    return {
      left: this.getTitleSize(),
      top: this.getExpandDirection() === 'top' ? this.getTitleSize() : `calc(${this.getContentHeight()} - ${this.getTitleSize()})`
    }
  }

  getCategoriesSize() {
    return {
      height: `calc(${this.getContentHeight()} - ${this.getTitleSize()})`,
      width: `calc(${this.getContentWidth()} - ${this.getTitleSize()})`
    }
  }


  getExpandDirection() {
    return this.props.expandDirection;
  }

  /*---------------------Properties with default value---------------------------*/

  getLineWidth() {
    return this.props.lineWidth || '50px';
  }

  getTitleSize() {
    return this.props.titleSize || '28px';
  }

  getContentHeight() {
    return this.props.contentHeight || '300px';
  }

  getContentWidth() {
    return this.props.contentWidth || '500px';
  }
}