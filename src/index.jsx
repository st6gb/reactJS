import './main.scss';
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import PosterFilmWrapper from './components/PosterFilmWrapper/PosterFilmWrapper.jsx'
import { Provider } from "react-redux";
import { createStore } from "redux";
import PanelSorting from './components/PanelSorting/PanelSorting.jsx';
import combineReducer from './reducers/index';



const store = createStore(combineReducer)
class App extends Component {
  constructor() {
    super();
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
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
