import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import getOneMovie from '../../actions/getOneMovie';
import { connect } from "react-redux";
import NameSite from '../NameSite/NameSite.jsx';
import styles from './BannerInfirmationFilm.scss'

const cx = classNames.bind(styles);
class BannerInformationFilm extends Component{
  
  componentDidMount() {
    this.pathname = window.location.pathname
    this.props.getData(this.pathname);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.pathname = window.location.pathname
      this.props.getData(this.pathname);
    }
  }
  render(){
    const { movie } = this.props
    return (
      <div class={cx('wrapper')}>
        <div class={cx('leftBlock')}>
          <NameSite />
        <img src={movie.poster_path} className={cx('poster')}/>
        </div>
        <div className={cx('rightBlock')}>
          <a href="/"><button className={cx('button')}>SEACRH</button></a>
          <div className={cx('description')}>{movie.overview}</div>
          <div className={cx('releaseDate')}>{movie.release_date}</div>
        </div>
      </div>);
  }
}
const mapStateToProps = state => ({
  movie: state.requestOneMovie
})

const mapDispatchToProps = dispatch =>({
  getData: pathname =>{
      dispatch(getOneMovie(pathname))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BannerInformationFilm);
