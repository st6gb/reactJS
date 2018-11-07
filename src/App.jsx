import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Main from './components/Main/Main';
import BannerFilm from './components/BannerFilm/BannerFilm';
import NotFound from './components/NotFound/NotFound';

const App = (props) => {
  const { store, persistor } = props;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/search" component={Main} />
              <Route path="/movies/:id(\d+)" component={BannerFilm} />
              <Route path="*" component={NotFound} />
            </Switch>
          </ErrorBoundary>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object,
  persistor: PropTypes.object,
};

export default hot(module)(App);
