import MovieListPage from "../../support/pages/movieApp/movieList";

const movieListPage = new MovieListPage();

describe("Favourites feature", () => {
  beforeEach(() => {
    movieListPage.visit();
  });

  it("user can add movie to favourites by clicking on it", () => {
    movieListPage.movieSearchInputType("Star Wars");

    movieListPage.movieSearchRow().within(() => {
      movieListPage.movieItem("0").click();
      movieListPage.movieTitle().first().invoke("text").as("favouriteMovieTitle");
    });

    movieListPage.movieFavouritesRow().within(() => {
      movieListPage.movieItem().should("have.length", "1");
      cy.get('@favouriteMovieTitle').then((favouriteMovieTitle) => {
        movieListPage.movieTitle().should('have.text', favouriteMovieTitle)
      })
    });
  });

  it("user can not add same movie twice to favourites", () => {
    movieListPage.movieSearchInputType("Star Wars");

    movieListPage.movieSearchRow().within(() => {
      movieListPage.movieItem("0").click();
      movieListPage.movieItem("0").click();
    });

    movieListPage.movieFavouritesRow().within(() => {
      movieListPage.movieItem().should("have.length", "1");
    });
  });

  it("user can remove movie from favourites by clicking on it", () => {
    movieListPage.movieSearchInputType("Star Wars");

    movieListPage.movieSearchRow().within(() => {
      movieListPage.movieItem("0").click();
    });

    movieListPage.movieFavouritesRow().within(() => {
      movieListPage.movieItem().click();
      movieListPage.movieItem().should("have.length", "0");
    });
  });
});
