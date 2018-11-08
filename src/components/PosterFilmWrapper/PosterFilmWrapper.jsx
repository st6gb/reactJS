import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './PosterFilmWrapper.scss';
import PosterFilm from '../PosterFilm/PosterFilm';

const cx = classNames.bind(styles);

class PosterFilmWrapper extends PureComponent {
  render() {
    const { data } = this.props;
    if (!data || data.length === 0) {
      return <div className={cx('contentWrapper')}>Ничего не найдено</div>;
    }
    return (
      <div className={cx('contentWrapper')}>
        {data.map((film) => {
          return (
            <Link to={{ pathname: `/movies/${film.id}` }} key={film.id}>
              <PosterFilm {...film} key={film.id} />
            </Link>
          );
        })}
      </div>
    );
  }
}
PosterFilmWrapper.propTypes = {
  data: PropTypes.array,
};

const mapStateToProps = state => ({
  data: state.filmsReduces.items,
});

export default connect(mapStateToProps)(PosterFilmWrapper);
