import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import { connect } from "react-redux";
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
            <button className={cx('button', {active : activeSort === 'release'})} onClick={()=>{this.props.onClick('release')}}>release</button>
            <button className={cx('button', {active : activeSort === 'date'})} onClick={()=>{this.props.onClick('date')}}>runtime</button>
            <button className={cx('button', {active : activeSort === 'rating'})} onClick={()=>{this.props.onClick('rating')}}>rating</button>
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