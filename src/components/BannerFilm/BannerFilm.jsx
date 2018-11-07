import React, { PureComponent } from 'react';
import BannerInformationFilms from '../BannerIformationFilms/BannerInfirmationFilm';
import Footer from '../footer/Footer';
import PanelSorting from '../PanelSorting/PanelSorting';
import PosterFilmWrapper from '../PosterFilmWrapper/PosterFilmWrapper';

class BannerFilm extends PureComponent {
  render() {
    return (
      <>
        <BannerInformationFilms {...this.props} />
        <PanelSorting />
        <PosterFilmWrapper />
        <Footer />
      </>
    );
  }
}

export default BannerFilm;
