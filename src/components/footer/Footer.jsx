import React from 'react';
import classNames from 'classnames/bind';
import NameSite from '../NameSite/NameSite';

import styles from './Footer.scss';

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx('footer')}>
      <NameSite />
    </div>
  );
}
