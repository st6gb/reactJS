import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import PanelSorting from '../PanelSorting/PanelSorting';
import PosterFilmWrapper from '../PosterFilmWrapper/PosterFilmWrapper';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { fetchFilms } from '../../store/actions/fetchFilms';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    const { getData } = this.props;
    getData();
  }

  componentDidMount() {
    if (window.location.pathname === '/search') {
      const { search, value, sortBy, sortOrder } = qs.parse(
        window.location.search,
      );
      const { getData } = this.props;
      getData(sortBy, sortOrder, value, search);
    }
  }

  componentDidUpdate(prevProps) {
    const { getData, location } = this.props;
    if (prevProps.location.search !== location.search) {
      const { search, value, sortBy, sortOrder } = qs.parse(
        window.location.search,
      );
      getData(sortBy, sortOrder, value, search);
    }
  }

  render() {
    return (
      <ErrorBoundary>
        <Header />
        <PanelSorting />
        <PosterFilmWrapper />
        <Footer />
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = state => ({
  data: state.filmsReduces.items,
  activeSort: state.sorting,
});
const mapDispatchToProps = dispatch => ({
  getData: (value, search, sortBy, sortOrder) => {
    dispatch(fetchFilms(value, search, sortBy, sortOrder));
  },
});
Main.propTypes = {
  getData: PropTypes.func,
  location: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
