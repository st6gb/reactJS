import React from 'react';
import classNames from 'classnames/bind';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import NameSite from '../NameSite/NameSite';
import Search from '../Search/Search'; // eslint-disable-line

import styles from './header.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('header')}>
      <ContentWrapper>
        <NameSite />
        <div className={cx('description-find')}>FIND YOUR MOVIE</div>
        <Search />
      </ContentWrapper>
    </div>
  );
};

export default Header;
