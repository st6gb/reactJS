import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import sortBy from '../../actions/sortBy';

import styles from './PanelSorting.scss';


const cx = classNames.bind(styles);

class PanelSorting extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { data, activeSort } = this.props;
    return(
      <div className={cx('panel')}>
          <span>{`${data.length} film found`}</span>
          <div className={cx('box-sort')}>
            <span >Sort by</span>
            <button className={cx('button', {active : activeSort === 'release_date'})} onClick={()=>{this.props.onClick('release_date')}}>release</button>
            <button className={cx('button', {active : activeSort === 'runtime'})} onClick={()=>{this.props.onClick('runtime')}}>runtime</button>
            <button className={cx('button', {active : activeSort === 'vote_average'})} onClick={()=>{this.props.onClick('vote_average')}}>rating</button>
          </div>
      </div>
    )
  }
}
PanelSorting.propTypes = {
  data: PropTypes.array,
  activeSort: PropTypes.string,
}
const mapStateToProps = state => ({
  data: state.request,
  activeSort: state.sorting
})
const mapDispatchToProps = dispatch =>({
  onClick: title =>{
      dispatch(sortBy(title))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(PanelSorting);