import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentWrapper.scss'

const cx = classNames.bind(styles);

class ContentWrapper extends Component {
  constructor() {
    super();
    
  }
  render() {
    const { children } = this.props
    console.log(this.props)
    return(
      <div className={cx('ContentWrapper')}>
      { children }
      </div>
    )
  }
}

export default ContentWrapper;