import React from 'react';
import Period from './Period';
import '../stylesheets/periods.less';

export default class Periods extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'periods'}>
          <Period/>
        </div>
    );
  }
}