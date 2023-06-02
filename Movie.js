class Movie {
  id;
  title;
  director;
  year;
  genre;
  constructor(id, title = "", director = "", year = "", genre = "") {
    this.id = id;
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.director = director;
  }
}

export default Movie;
