import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import PropTypes from "prop-types";
import styles from './PosterFilmWrapper.scss';
import PosterFilm from '../PosterFilm/PosterFilm.jsx';


const cx = classNames.bind(styles);

class PosterFilmWrapper extends PureComponent{
  constructor(){
      super();
  }
  render(){
      const { data } = this.props;
      console.log(data);
      return(
          data.map((film) => {
              return <PosterFilm {...film} key ={film.id}/> 
          })
      )
  }
}
PosterFilmWrapper.propTypes = {
  data: PropTypes.array,
}
export default PosterFilmWrapper;