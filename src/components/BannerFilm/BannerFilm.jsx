import React, { Component, PureComponent } from 'react';
import BannerInformationFilms from '../../components/BannerIformationFilms/BannerInfirmationFilm.jsx';
import Footer from '../../components/footer/Footer.jsx';
import PanelSorting from '../PanelSorting/PanelSorting.jsx';
import PosterFilmWrapper from '../../components/PosterFilmWrapper/PosterFilmWrapper.jsx'
class BannerFilm extends PureComponent {
  constructor() {
    super();
  }
  render() {
    return(
      <>
        <BannerInformationFilms { ...this.props}/>
        <PanelSorting />
        <PosterFilmWrapper />
        <Footer />
      </>
    )
  }
}

export default BannerFilm;