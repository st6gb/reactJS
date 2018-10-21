import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import { connect } from "react-redux";
import setActiveTab from '../../actions/activeTab';
import getFilm from '../../actions/getFilm';
import styles from './Search.scss';

const cx = classNames.bind(styles);

export class Search extends Component{
    constructor(){
        super();
        this.getFilm = this.getFilms;
    }
    isActiveTabTitle(){
        return this.props.activeTab[0] === "title"? "tab_active" : null;
    }
    isActiveTabGenre(){
        return this.props.activeTab[0] === "genres"? "tab_active" : null;
    }
    getFilms(){
        
        const value = document.getElementById('search').value;
        console.log(value);
        this.props.getData(value ,this.props.activeTab[0])
    }
    render(){
        return(
            <>
                <input className={cx('input_search')} id="search"type="text" placeholder="find your film"/>
                <div className={cx('option_search')}>
                    <div className={cx('text')}>SEARCH BY</div>
                    <div className={cx('tab_searching', this.isActiveTabTitle())} onClick = {()=>this.props.onClick("title")}>TITLE</div>
                    <div className={cx('tab_searching', this.isActiveTabGenre())} onClick = {()=>this.props.onClick("genres")}>GENRE</div>
                    <button className={cx('button')} onClick = {()=>this.getFilm()}>search</button>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    activeTab: state.active
})
const mapDispatchToProps = dispatch =>({
    onClick: title =>{
        dispatch(setActiveTab(title))
    },
    getData : (search, searchBy) =>{
        dispatch(getFilm(search, searchBy))
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(Search);