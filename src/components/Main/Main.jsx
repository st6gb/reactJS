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
    const {search, value} = qs.parse(window.location.search)
    this.props.getData(value, search);
  }
  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search){
      const {search, value} = qs.parse(window.location.search)
      this.props.getData(value, search);
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
  data: state.request
})
const mapDispatchToProps = dispatch =>({
  getData : (search, searchBy) =>{
    dispatch(getFilm(search, searchBy))
}

})
export default connect(mapStateToProps, mapDispatchToProps)(Main);