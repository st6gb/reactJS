import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import { connect } from "react-redux";
import setActiveTab from '../../actions/activeTab';
import styles from './Search.scss';
import { browserHistory, withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

export class Search extends Component{
    constructor(){
        super();
        this.state={}
    }
    handleClick() {
        const value = document.getElementById('search').value;
        this.props.history.push(`/search?search=${this.props.activeTab}&value=${value}`)
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
                        <button className={cx('button')} onClick = {()=>this.handleClick()}>search</button>
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
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));