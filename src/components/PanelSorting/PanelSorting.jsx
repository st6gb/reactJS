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
    const { data } = this.props;
    return(
      <div className={cx('panel')}>
          <span>{`${data.length} film found`}</span>
          <div className={cx('box-sort')}>
            <span >Sort by</span>
            <button className={cx('button', this.props.activeSort === 'release' ? 'active' : null)} onClick={()=>{this.props.onClick('release')}}>release</button>
            <button className={cx('button', this.props.activeSort === 'date' ? 'active' : null)} onClick={()=>{this.props.onClick('date')}}>runtime</button>
            <button className={cx('button', this.props.activeSort === 'rating' ? 'active' : null)} onClick={()=>{this.props.onClick('rating')}}>rating</button>
          </div>
      </div>
    )
  }
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