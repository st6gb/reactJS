import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Main from './components/Main/Main';
import BannerFilm from './components/BannerFilm/BannerFilm';
import NotFound from './components/NotFound/NotFound';
import PictureDogs from './components/PictureDogs/PictureDogs';


const App = (props) => {
  const { Router, store, context, location } = props;
  return (
    <Provider store={store}>
      <Router location={location} context={context}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/search" component={Main} />
          <Route path="/movies/:id(\d+)" component={BannerFilm} />
          <Route path="/easter-egg" component={PictureDogs} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  Router: PropTypes.func.isRequired,
  store: PropTypes.object,
  persistor: PropTypes.object,
  context: PropTypes.object,
  location: PropTypes.string,
};

export default hot(module)(App);
