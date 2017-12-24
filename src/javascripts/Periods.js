import React from 'react';
import Period from './Period';
import PeriodModel from './model/Period';
import '../stylesheets/periods.less';

export default class Periods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click');
    this.setState(pre => pre.expand ? {} : {expand: true});
  }

  render() {
    return (
        <div className={'periods'} onClick={this.handleClick}>
          <Period data={Periods.getPeriod()} expandDirection={'top'} expand={this.state.expand} lineWidth={'100px'}
                  contentWidth={'300px'} contentHeight={'150px'} titleSize={'28px'}/>
        </div>
    );
  }

  // TODO for test
  static getPeriod() {
    return new PeriodModel({
      'title': 'Test Period Title',
      'time': 'Test Period Time',
      'color': 'blue',
      'categories': [
        {
          'title': 'Test Category'
        },
        {
          'title': 'Test Category With Pics',
          'images': ['1', '2']
        }
      ]
    });
  }
}