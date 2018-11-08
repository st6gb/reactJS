import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sortBy from '../../store/actions/sortBy';

import styles from './PanelSorting.scss';

const cx = classNames.bind(styles);

const PanelSorting = (props) => {
  const { data, activeSort } = props;
  return (
    <div className={cx('panel')}>
      <span>{`${data ? data.length : 0} film found`}</span>
      <div className={cx('box-sort')}>
        <span>Sort by</span>
        <button
          type="submit"
          className={cx('button', { active: activeSort === 'release_date' })}
          onClick={() => {
            props.onClick('release_date');
          }}
        >
          release
        </button>
        <button
          type="submit"
          className={cx('button', { active: activeSort === 'runtime' })}
          onClick={() => {
            props.onClick('runtime');
          }}
        >
          runtime
        </button>
        <button
          type="submit"
          className={cx('button', { active: activeSort === 'vote_average' })}
          onClick={() => {
            props.onClick('vote_average');
          }}
        >
          rating
        </button>
      </div>
    </div>
  );
};

PanelSorting.propTypes = {
  data: PropTypes.array,
  activeSort: PropTypes.string,
  onClick: PropTypes.func,
};
const mapStateToProps = state => ({
  data: state.filmsReduces.items,
  activeSort: state.sorting,
});
const mapDispatchToProps = dispatch => ({
  onClick: title => {
    dispatch(sortBy(title));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PanelSorting);
