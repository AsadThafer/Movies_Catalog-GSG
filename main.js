import prompt from "prompt-sync";
import * as fs from "fs";
const input = prompt();
import Movie from "./movie.js";

const printMenu = () => {
  console.log(`
    *********************************
     Select an action:
      1) Display Movies Catalog
      2) Add new Movie (title, director, year , genre)
      3) Update a Movie (title, director, year , genre)
      4) Delete a Movie
      5) Search for a Movie by (title or director or year or genre)
      6) Filter Movies by (year or genre)
      7) Fetch Movies from API and save them to the DB
      0) Exit
    *********************************
  `);
};

const movies = [];

fs.readFile("movies.json", "utf8", (err, data) => {
  if (err) {
    console.log(`Error reading file from disk: ${err}`);
  } else {
    const movies = JSON.parse(data);
    console.log(movies);
  }
});

const fetchMovies = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json"
  );
  const data = await response.json();
  data.forEach((movie) => {
    const { title, year, genres, director } = movie;
    const newMovie = new Movie(title, director, year, genres);
    movies.push(newMovie);
  });
  return movies;
};

const addMovie = () => {
  const title = input("Enter movie title: ");
  const director = input("Enter movie director: ");
  const year = input("Enter movie year: ");
  const genre = input("Enter movie genre: ");
  const newMovie = new Movie(title, director, year, genre);
  movies.push(newMovie);
  saveMoviesToJSON();
};

const updateMovie = () => {
  const title = input("Enter movie title: ");
  const director = input("Enter movie director: ");
  const year = input("Enter movie year: ");
  const genre = input("Enter movie genre: ");
  const newMovie = new Movie(title, director, year, genre);
  movies.push(newMovie);
  fs.writeFile("movies.json", JSON.stringify(movies), (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    } else {
      console.log(`File is written successfully!`);
    }
  });
};

const deleteMovie = () => {
  const choice = input("Enter delete by title or director or year or genre: ");
  switch (choice) {
    case "title":
      deleteMovieByTitle();
      break;
    case "director":
      deleteMovieByDirector();
      break;
    case "year":
      deleteMovieByYear();
      break;
    case "genre":
      deleteMovieByGenre();
      break;
    default:
      break;
  }
};

const deleteMovieByTitle = () => {
  const title = input("Enter movie title: ");
  const index = movies.findIndex((movie) => movie.title === title);
  if (index !== -1) {
    movies.splice(index, 1);
    saveMoviesToJSON();
  }
};

const deleteMovieByDirector = () => {
  const director = input("Enter movie director: ");
  const index = movies.findIndex((movie) => movie.director === director);
  if (index !== -1) {
    movies.splice(index, 1);
    saveMoviesToJSON();
  }
};

const deleteMovieByYear = () => {
  const year = input("Enter movie year: ");
  const index = movies.findIndex((movie) => movie.year === year);

  if (index !== -1) {
    movies.splice(index, 1);
    saveMoviesToJSON();
  }
};

const deleteMovieByGenre = () => {
  const genre = input("Enter movie genre: ");
  const index = movies.findIndex((movie) => movie.genre === genre);
  if (index !== -1) {
    movies.splice(index, 1);
    saveMoviesToJSON();
  }
};

const saveMoviesToJSON = () => {
  fs.writeFile("movies.json", JSON.stringify(movies), (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    } else {
      console.log(`File is written successfully!`);
    }
  });
};

const main = () => {
  fs.readFile("movies.json", "utf8", (err, fileData) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      movies.push(...JSON.parse(fileData));
    }
    while (true) {
      printMenu();
      const choice = input("Enter Choice Number:");
      switch (choice) {
        case "1":
          console.log(movies);
          break;
        case "2":
          addMovie();
          break;
        case "3":
          updateMovie();
          break;
        case "4":
          deleteMovie();
          break;
        case "7":
          fetchMovies();
          break;
        case "0":
          return;

        default:
          break;
      }
    }
  });
};

main();