import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './PosterFilm.scss';

const cx = classNames.bind(styles);

class PosterFilm extends PureComponent {
  render() {
    const film = this.props;
    return (
      <div className={cx('content_film')} key={film.id}>
        <img src={film.poster_path} className={cx('poster')} alt="kartinka" />
        <div className={cx('discription_film')}>
          <div>
            {film.title}
            <span className={cx('date')}>{film.release_date.slice(0, 4)}</span>
          </div>
          <div>{film.genres.join(' & ')}</div>
        </div>
      </div>
    );
  }
}
PosterFilm.propTypes = {
  data: PropTypes.array,
};
export default PosterFilm;
