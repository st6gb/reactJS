import React, { Component, PureComponent } from 'react';
import classNames from 'classnames/bind';
import { connect } from "react-redux";

class BannerInformationFilm extends Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props);
  }
}
const mapStateToProps = state => ({
  data: state.request
})

export default connect(mapStateToProps)(BannerInformationFilm);


// const Player = (props) => {
//   const player = PlayerAPI.get(
//     parseInt(props.match.params.number, 10)
//   )
//   if (!player) {
//     return <div>Sorry, but the player was not found</div>
//   }
//   return (
//     <div>
//       <h1>{player.name} (#{player.number})</h1>
//       <h2>{player.position}</h2>
//     </div>
// )