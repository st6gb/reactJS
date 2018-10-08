import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';

import styles from './PosterFilm.scss';

const cx = classNames.bind(styles);

class PosterFilm extends PureComponent{
    constructor(){
        super();
    }
    render(){
        return(
        <div className={cx('content_film')}>
            <img src={this.props.poster_path} className={cx('poster')}/>
            <div>{this.props.title}<span className={cx('date')}>{this.props.release_date.slice(0,4)}</span></div>
            <div>{this.props.genres.join(" & ")}</div>
        </div>
        )
    }
}

export default PosterFilm;
