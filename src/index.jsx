import './main.scss';
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header.jsx';


class Ololo extends Component {
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
ReactDOM.render(<Ololo />, document.getElementById('root'));
