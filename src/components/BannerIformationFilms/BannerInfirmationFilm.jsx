import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import getOneMovie from '../../actions/getOneMovie';
import { connect } from "react-redux";
import NameSite from '../NameSite/NameSite.jsx';
import styles from './BannerInfirmationFilm.scss'
import { Link } from 'react-router-dom'

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
      <div className={cx('wrapper')}>
        <div className={cx('leftBlock')}>
          <NameSite />
        <img src={movie.poster_path} className={cx('poster')}/>
        </div>
        <div className={cx('rightBlock')}>
          <Link to={{ pathname: '/' }}><button className={cx('button')}>SEACRH</button></Link>
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
