import React from 'react';
import Circle from './Circle';
import PeriodLine from './PeriodLine';
import PeriodTime from './PeriodTime';
import Categories from './Categories';
import '../stylesheets/period.less';

export default class Period extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeExpand: '',
      timeExpanded: false,
      circleExpanded: false,
      textExpand: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleTimeExpanded = this.handleTimeExpanded.bind(this);
    this.handleCircleExpanded = this.handleCircleExpanded.bind(this);
  }

  static getDefaultWidth() {
    return '500px';
  }

  handleClick() {
    this.setState({
      timeExpand: this.getExpand()
    });
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
        textExpand: this.getExpand()
      });
    }
  }

  render() {
    return (
        <div className={'period'} onClick={this.handleClick}>
          <PeriodTime size={this.getTitleSize()} expand={this.state.timeExpand} color={Circle.getDefaultColor()}
                      onExpanded={this.handleTimeExpanded} text={'test period'}>

            <Categories expand={this.state.textExpand} offset={this.getCategoriesOffset()}
                        size={this.getCategoriesSize()}/>

            <Circle size={this.getTitleSize()} expand={this.state.timeExpanded} width={Period.getDefaultWidth()}
                    text={'Test Title'} onExpanded={this.handleCircleExpanded}/>

            <Categories expand={this.state.textExpand} offset={this.getCategoriesOffset()}
                        size={this.getCategoriesSize()}/>

          </PeriodTime>
          <PeriodLine size={this.getTitleSize()}/>
        </div>
    );
  }

  getCategoriesOffset() {
    return {
      left: this.getTitleSize(),
      top: this.getExpand() === 'top' ? this.getTitleSize() : `calc(${PeriodTime.getDefaultHeight()} - ${this.getTitleSize()})`
    }
  }

  getCategoriesSize() {
    return {
      height: `calc(${PeriodTime.getDefaultHeight()} - ${this.getTitleSize()})`,
      width: `calc(${Period.getDefaultWidth()} - ${this.getTitleSize()})`
    }
  }

  getTitleSize() {
    return '28px';
  }

  getExpand() {
    return 'top';
  }
}