import React from 'react';
import Starter from './Starter';
import Periods from './Periods';
import PeriodModel from './model/Period';
import periodsData from '../jsons/periods';
import '../stylesheets/container.less';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      periodIndex: -1,
      targetIndex: -1
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleStarterShrink = this.handleStarterShrink.bind(this);
  }

  handleClick() {
    this.setTargetIndex(pre => Math.min(pre.targetIndex + 1, Container.getPeriodSize()));
  }

  handleRightClick(e) {
    this.setTargetIndex(pre => Math.max(pre.targetIndex - 1, -1));
    e.preventDefault();
  }

  handleStarterShrink() {
    this.setTargetIndex(() => 0);
  }

  setTargetIndex(callback) {
    this.setState(pre => {
      setTimeout(this.setPeriodIndex.bind(this), 500);
      return {
        targetIndex: callback(pre)
      };
    });
  }

  setPeriodIndex() {
    this.setState(pre => ({periodIndex: pre.targetIndex}));
  }

  render() {
    return (
      <div className="container" style={this.getStyle()} onClick={this.handleClick}
           onContextMenu={this.handleRightClick}>
        <Starter text='Hello!' lineWidth={Container.getStarterWidthInPx()} pointSize={Container.getTitleSizeInPx()}
                 onShrink={this.handleStarterShrink}/>
        <Periods data={Container.getPeriods()} index={this.state.periodIndex}
                 lineWidth={Container.getPeriodLineWidthInPx()} contentWidth={Container.getContentWidthInPx()}
                 contentHeight={Container.getContentHeightInPx()} titleSize={Container.getTitleSizeInPx()}/>
      </div>
    );
  }

  getStyle() {
    return {
      left: this.getLeftInPx(),
      top: this.getTopInPx()
    };
  }

  getTopInPx() {
    const index = this.state.targetIndex;
    if (index < 0 || index >= Container.getPeriodSize()) {
      return '0';
    } else {
      return `${Periods.getExpandDirection(index) === 'top' ? '' : '-'}${(Container.getContentHeight() + Container.getTitleSize()) / 2}px`;
    }
  }

  getLeftInPx() {
    const index = this.state.targetIndex;
    if (index < 0) {
      return `calc(50vw - ${Container.getTitleSize() / 2}px)`;
    } else if (index >= Container.getPeriodSize()) {
      return `calc(50vw - ${Container.getTitleSize() * 1.5 + Container.getStarterWidth() * 2 + Container.getPeriodSize() * (Container.getPeriodLineWidth() + Container.getTitleSize())}px)`;
    } else {
      return `calc(50vw - ${Container.getTitleSize() + Container.getStarterWidth() + index * (Container.getTitleSize() + Container.getPeriodLineWidth()) + 0.5 * (Container.getTitleSize() + Container.getContentWidth())}px)`
    }
  }

  static getPeriods() {
    return [...periodsData].map(data => new PeriodModel(data));
  }

  static getPeriodSize() {
    return this.getPeriods().length;
  }

  static getStarterWidthInPx() {
    return this.getStarterWidth() + 'px';
  }

  static getStarterWidth() {
    return 200;
  }

  static getPeriodLineWidthInPx() {
    return this.getPeriodLineWidth() + 'px';
  }

  static getPeriodLineWidth() {
    return 400;
  }

  static getContentWidthInPx() {
    return this.getContentWidth() + 'px';
  }

  static getContentWidth() {
    return 800;
  }

  static getContentHeightInPx() {
    return this.getContentHeight() + 'px';
  }

  static getContentHeight() {
    return 600;
  }

  static getTitleSizeInPx() {
    return this.getTitleSize() + 'px';
  }

  static getTitleSize() {
    return 84;
  }
}