import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import ContentWrapper from "../ContentWrapper/ContentWrapper.jsx"
import NameSite from '../NameSite/NameSite.jsx'
import  Search  from '../Search/Search.jsx'

import styles from './PanelSorting.scss';


const cx = classNames.bind(styles);

export default function PanelSortung(){
  return(
    <div className={cx('panel')}>
        <span>${'7 film found'}</span>
        <span>Sort by</span>
        <button>release</button>
        <button>date</button>
        <button>rating</button>
    </div>
  )
}