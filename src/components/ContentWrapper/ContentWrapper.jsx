import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './ContentWrapper.scss';

const cx = classNames.bind(styles);

const ContentWrapper = (props) => {
  const { children } = props;
  return (
    <div className={cx('contentWrapper')}>
      { children }
    </div>
  );
};
ContentWrapper.propTypes = {
  children: PropTypes.array,
};

export default ContentWrapper;
