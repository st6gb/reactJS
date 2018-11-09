import React, { PureComponent } from 'react';
import BannerInformationFilms from '../BannerIformationFilms/BannerInfirmationFilm';
import Footer from '../footer/Footer';
import PanelSorting from '../PanelSorting/PanelSorting';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import PosterFilmWrapper from '../PosterFilmWrapper/PosterFilmWrapper';

class BannerFilm extends PureComponent {
  render() {
    return (
      <ErrorBoundary>
        <BannerInformationFilms {...this.props} />
        <PanelSorting />
        <PosterFilmWrapper />
        <Footer />
      </ErrorBoundary>
    );
  }
}

export default BannerFilm;
