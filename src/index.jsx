import './main.scss';
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import PosterFilm from './components/PosterFilm/PosterFilm.jsx'
import { Provider } from "react-redux";
import { createStore } from "redux";
import PanelSorting from './components/PanelSorting/PanelSorting.jsx';
import { data } from '../data';

function reducer(state=["genre"], action){
  if(action.type === "SET_ACTIVE"){
    return [
       action.active
      ]
  }
  return state
}

const store = createStore(reducer)
class App extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(data);
    return (
      <React.Fragment>
        <Header />
        <PanelSorting />
        <div className="contentWrapper">
          <PosterFilm data={data} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
