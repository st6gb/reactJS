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

    getFilms(activeTab){
        const value = document.getElementById('search').value;
        this.props.getData(value, activeTab);
        document.getElementById('search').value = '';
    }

    render(){
        const { activeTab } = this.props;
        return(
            <>
                <input className={cx('input_search')} id="search"type="text" placeholder="find your film"/>
                <div className={cx('option_search')}>
                    <div className={cx('text')}>SEARCH BY</div>
                    <div className={cx('tab_searching', { tab_active: activeTab === 'title' })} onClick = {()=>this.props.onClick("title")}>TITLE</div>
                    <div className={cx('tab_searching', { tab_active: activeTab === 'genres' })} onClick = {()=>this.props.onClick("genres")}>GENRE</div>
                    <button className={cx('button')} onClick = {()=>this.getFilm(activeTab)}>search</button>
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