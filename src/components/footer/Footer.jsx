import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import ContentWrapper from "../ContentWrapper/ContentWrapper.jsx"
import NameSite from '../NameSite/NameSite.jsx'
import  Search  from '../Search/Search.jsx'

import styles from './Footer.scss';


const cx = classNames.bind(styles);

export default function Footer(){
  return(
    <div className={cx('footer')}>
      <NameSite />
    </div>
  )
}