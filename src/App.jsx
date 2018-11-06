import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import Main from './components/Main/Main.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BannerFilm from './components/BannerFilm/BannerFilm.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    const {store, persistor } = this.props
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ErrorBoundary>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/search" component={Main} />
                <Route path="/movies/:id" component={BannerFilm} />
                <Route path="*" component={NotFound} />
              </Switch>
            </ErrorBoundary>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default hot(module)(App);
