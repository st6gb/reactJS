import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import setActiveTab from '../../actions/activeTab';
import styles from './Search.scss';


const cx = classNames.bind(styles);

export class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick() {
    const { history, activeSort, activeTab } = this.props;
    const value = document.getElementById('search').value;
    history.push(
      `/search?sortBy=${activeSort}&sortOrder=desc&search=${activeTab}&value=${value}`,
    );
    document.getElementById('search').value = '';
  }
/*eslint-disable */
  render() {
    const { activeTab, onClick } = this.props;
    return (
      <>
        <input
          className={cx('input_search')}
          id="search"
          type="text"
          placeholder="find your film"
        />
        <div className={cx('option_search')}>
          <div className={cx('text')}>SEARCH BY</div>
          
          <div
            className={cx('tab_searching', {
              tab_active: activeTab === 'title'
            })}
            onClick={() => onClick('title')}
          >
            TITLE
          </div>
          <div
            className={cx('tab_searching', {
              tab_active: activeTab === 'genres'
            })}
            onClick={() => onClick('genres')}
          >
            GENRE
          </div>
          <button type="submit" className={cx('button')} onClick={() => this.handleClick()}>
            search
          </button>
        </div>
      </>
    );
  }
}
/* eslint-enable */
Search.propTypes = {
  history: PropTypes.object,
  activeSort: PropTypes.string,
  activeTab: PropTypes.string,
  onClick: PropTypes.func,
};

const mapStateToProps = state => ({
  activeTab: state.active,
  activeSort: state.sorting,
});
const mapDispatchToProps = dispatch => ({
  onClick: title => {
    dispatch(setActiveTab(title));
  },
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
