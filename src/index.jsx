import './main.scss';
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header.jsx';
import { Provider } from "react-redux";
import { createStore } from "redux";

function lala(state=[], action){
  return state
}

const store = createStore(lala)
class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
