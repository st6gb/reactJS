import './main.scss';
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import { Provider } from "react-redux";
import Main from './components/Main/Main.jsx';
import configureStore from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BannerFilm from './components/BannerFilm/BannerFilm.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

const { persistor, store } = configureStore();

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ErrorBoundary>
      <Switch>
        <Route exact path ="/" component ={Main} />
        <Route path ="/movies/:id" component ={BannerFilm} />
        <Route path ="*" component={NotFound}/>
      </Switch>
      </ErrorBoundary>
    );
  }
}
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>, 
  document.getElementById('root'));
