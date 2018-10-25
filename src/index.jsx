import './main.scss';
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import PosterFilmWrapper from './components/PosterFilmWrapper/PosterFilmWrapper.jsx'
import { Provider } from "react-redux";
import PanelSorting from './components/PanelSorting/PanelSorting.jsx';
import configureStore from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const { persistor, store } = configureStore()

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ErrorBoundary>
      <Switch>
        <Route exact path ="/" component ={Header} />
        <Route path ="/movies/:id" component ={Footer} />
      </Switch>
        <PanelSorting />
        <PosterFilmWrapper />
        <Footer />
      </ErrorBoundary>
    );
  }
}
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root'));
