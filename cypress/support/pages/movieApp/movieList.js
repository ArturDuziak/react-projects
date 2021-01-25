class MovieList {
  url() {
    return "/movie-app";
  }

  visit() {
    return cy.visit(this.url());
  }

  movieSearchInput() {
    return cy.get('[data-cy="search-movie-input"]');
  }

  movieSearchInputType(text) {
    this.movieSearchInput().type(text);
  }

  movieSearchRow() {
    return cy.get('[data-cy="movies-search-row"]');
  }

  movieFavouritesRow() {
    return cy.get('[data-cy="favourites-movies-row"]');
  }

  movieTitle() {
    return cy.get('[data-cy="movie-title"]')
  }

  movieItem(index) {
    if (index) return cy.get(`[data-cy="movie-item-${index}"]`)
    else return cy.get(`[data-cy*="movie-item-"]`)
  }
}

export default MovieList
