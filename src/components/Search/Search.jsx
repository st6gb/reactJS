import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import { connect } from "react-redux";

import styles from './Search.scss';

const cx = classNames.bind(styles);

class Search extends Component{
    constructor(){
        super();
    }
    isActiveTabTitle(){
        return this.props.activeTab[0] === "title"? "tab_active" : null;
    }
    isActiveTabGenre(){
        return this.props.activeTab[0] === "genre"? "tab_active" : null;
    }
    render(){
        return(
            <>
                <input className={cx('input_search')} type="text" placeholder="find your film"/>
                <div className={cx('option_search')}>
                    <div className={cx('text')}>SEARCH BY</div>
                    <div className={cx('tab_searching', this.isActiveTabTitle())} onClick = {()=>this.props.onClick("title")}>TITLE</div>
                    <div className={cx('tab_searching', this.isActiveTabGenre())} onClick = {()=>this.props.onClick("genre")}>GENRE</div>
                    <button>search</button>
                </div>
                
            </>
        )
    }
}
const mapStateToProps = state => ({
    activeTab: state
})
const mapDispatchToProps = dispatch =>({
    onClick: title =>{
        dispatch({type: "SET_ACTIVE", active: title})
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Search);