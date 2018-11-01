import React, { Component, PureComponent } from 'react';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import PanelSorting from '../PanelSorting/PanelSorting.jsx';
import PosterFilmWrapper from '../../components/PosterFilmWrapper/PosterFilmWrapper.jsx';
class Main extends PureComponent {
  constructor() {
    super();
  }
  render() {
    return(
      <>
        <Header/>
        <PanelSorting />
        <PosterFilmWrapper />
        <Footer />
      </>
    )
  }
}

export default Main;