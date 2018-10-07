import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import { connect } from "react-redux";

import styles from './Search.scss';

const cx = classNames.bind(styles);

class Search extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.activeTab);
        return(
            <>
                <input className={cx('input_search')} type="text" placeholder="find your film"/>
                <div className={cx('option_search')}>
                    <div className={cx('text')}>SEARCH BY</div>
                    <div className={cx('tab_searching')} onClick = {this.props.onClick("title")}>TITLE</div>
                    <div className={cx('tab_searching')} onClick = {this.props.onClick("genre")}>GENRE</div>
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
    onClick: type =>{}
})
export default connect(mapStateToProps, mapDispatchToProps)(Search);