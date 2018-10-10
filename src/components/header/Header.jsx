import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import ContentWrapper from "../ContentWrapper/ContentWrapper.jsx"
import NameSite from '../NameSite/NameSite.jsx'
import  Search  from '../Search/Search.jsx'

import styles from './header.scss';


const cx = classNames.bind(styles);

class Header extends PureComponent {
  constructor() {
    super();
  }
  render() {
    return(
      <div className={cx('header')}>
        <ContentWrapper>
        <NameSite />
        <div className={cx('description-find')}>FIND YOUR MOVIE</div>
        <Search />
        </ContentWrapper>
      </div>
    )
  }
}

export default Header;
