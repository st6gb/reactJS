import React, { PureComponent } from 'react';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import PanelSorting from '../PanelSorting/PanelSorting.jsx';
import PosterFilmWrapper from '../../components/PosterFilmWrapper/PosterFilmWrapper.jsx';
import { connect } from "react-redux";
import getFilm from '../../actions/getFilm';
import qs from 'query-string';
class Main extends PureComponent {
  constructor() {
    super();
    this.state = {}
  }
  componentDidMount() {
    if(window.location.pathname === "/search"){
      console.log(qs.parse(window.location.search))
      const {search, value, sortBy, sortOrder} = qs.parse(window.location.search)
      this.props.getData(value, search, sortBy, sortOrder);
    }
    
  }
  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search){
      const {search, value, sortBy, sortOrder} = qs.parse(window.location.search)
      this.props.getData(value, search, sortBy, sortOrder);
    }
  }
  render() {
    return(
      <>
        <Header />
        <PanelSorting />
        <PosterFilmWrapper />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => ({
  data: state.request,
  activeSort: state.sorting
})
const mapDispatchToProps = dispatch =>({
  getData : (value, search, sortBy, sortOrder) =>{
    dispatch(getFilm(value, search, sortBy, sortOrder))
}

})
export default connect(mapStateToProps, mapDispatchToProps)(Main);