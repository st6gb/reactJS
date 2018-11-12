import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NameSite from '../NameSite/NameSite';
import styles from './BannerInfirmationFilm.scss';
import { fetchFilmById } from '../../store/actions/fetchFilmById';

const cx = classNames.bind(styles);
class BannerInformationFilm extends Component {
  constructor(props) {
    super(props);
    const { pathname } = this.props.location; //eslint-disable-line
    const { getData } = this.props;
    getData(pathname);
  }

  componentDidUpdate(prevProps) {
    const { getData, match } = this.props;
    if (match.params.id !== prevProps.match.params.id) {
      this.pathname = window.location.pathname;
      getData(this.pathname);
    }
  }

  render() {
    const { movie } = this.props;
    return (
      <div className={cx('wrapper')}>
        <div className={cx('leftBlock')}>
          <NameSite />
          {movie && <img src={movie.poster_path} className={cx('poster')} alt="poster for film" />}
        </div>
        <div className={cx('rightBlock')}>
          <Link to={{ pathname: '/' }}>
            <button className={cx('button')} type="submit">SEACRH</button>
          </Link>
          {movie && <div className={cx('description')}>{movie.overview}</div>}
          {movie && <div className={cx('releaseDate')}>{movie.release_date}</div>}
        </div>
      </div>
    );
  }
}
BannerInformationFilm.propTypes = {
  getData: PropTypes.func,
  movie: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  movie: state.filmsReduces.oneMovie,
});

const mapDispatchToProps = dispatch => ({
  getData: pathname => {
    dispatch(fetchFilmById(pathname));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BannerInformationFilm);
