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
      4) Delete a Movie by (title or director or year or genre)
      5) Search for a Movie by (title or director or year or genre)
      6) Filter Movies by (year or genre)
      7) Fetch Movies from API and save them to the DB
      0) Exit
    *********************************
  `);
};

const randomID = () => {
  return Math.floor(Math.random() * 1000);
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
    "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
  );
  const data = await response.json();
  data.forEach((movie) => {
    const title = movie.Title; // Use Title as title
    const year = movie.Year; // Use Year as year
    const director = movie.Runtime; // Use runtime as director
    const genre = "Action"; // Use "Action" as default genre for all movies
    const newMovie = new Movie(randomID(), title, director, year, genre);
    movies.push(newMovie);
  });
  saveMoviesToJSON();
  console.log("Movies fetched successfully!");
};

const addMovie = () => {
  const title = input("Enter movie title: ");
  const director = input("Enter movie director: ");
  const year = input("Enter movie year: ");
  const genre = input("Enter movie genre: ");
  const newMovie = new Movie(randomID(), title, director, year, genre);
  movies.push(newMovie);
  fs.readFileSync("movies.json", "utf8", (err, fileData) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
      return;
    }

    let existingMovies = [];
    if (fileData.length > 0) {
      existingMovies = JSON.parse(fileData);
    }
    existingMovies.push(newMovie);
    saveMoviesToJSON();
    console.log("Movie added successfully!");
  });
};

const updateMovie = () => {
  const choice = input("Enter update by title or director or year or genre: ");
  switch (choice) {
    case "title":
      updateMovieByTitle();
      break;
    case "director":
      updateMovieByDirector();
      break;
    case "year":
      updateMovieByYear();
      break;
    case "genre":
      updateMovieByGenre();
      break;
    default:
      break;
  }
};

const updateMovieByTitle = () => {
  const title = input("Enter movie title: ");
  const index = movies.findIndex((movie) => movie.title === title);
  console.log("Movie ID:", movies[index].id);
  if (index !== -1) {
    const newTitle = input("Enter new movie title: ");
    movies[index].title = newTitle;
    saveMoviesToJSON();
    console.log("Movie updated successfully!");
  } else {
    console.log("Movie not found!");
  }
};

const updateMovieByDirector = () => {
  const director = input("Enter movie director: ");
  const index = movies.findIndex((movie) => movie.director === director);
  console.log("Movie ID:", movies[index].id);
  if (index !== -1) {
    const newDirector = input("Enter new movie director: ");
    movies[index].director = newDirector;
    saveMoviesToJSON();
    console.log("Movie updated successfully!");
  } else {
    console.log("Movie not found!");
  }
};

const updateMovieByYear = () => {
  const year = input("Enter movie year: ");
  const index = movies.findIndex((movie) => movie.year === year);
  console.log("Movie ID:", movies[index].id);
  if (index !== -1) {
    const newYear = input("Enter new movie year: ");
    movies[index].year = newYear;
    saveMoviesToJSON();
    console.log("Movie updated successfully!");
  } else {
    console.log("Movie not found!");
  }
};

const updateMovieByGenre = () => {
  const genre = input("Enter movie genre: ");
  const index = movies.findIndex((movie) => movie.genre === genre);
  console.log("Movie ID:", movies[index].id);
  if (index !== -1) {
    const newGenre = input("Enter new movie genre: ");
    movies[index].genre = newGenre;
    saveMoviesToJSON();
    console.log("Movie updated successfully!");
  } else {
    console.log("Movie not found!");
  }
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
  console.log("Movie ID:", movies[index].id);

  if (index !== -1) {
    movies.splice(index, 1);
    saveMoviesToJSON();
    console.log("Movie deleted successfully!");
  } else {
    console.log("Movie not found!");
  }
};

const deleteMovieByDirector = () => {
  const director = input("Enter movie director: ");
  const index = movies.findIndex((movie) => movie.director === director);
  console.log("Movie ID:", movies[index].id);
  if (index !== -1) {
    movies.splice(index, 1);
    saveMoviesToJSON();
    console.log("Movie deleted successfully!");
  } else {
    console.log("Movie not found!");
  }
};

const deleteMovieByYear = () => {
  const year = input("Enter movie year: ");
  const index = movies.findIndex((movie) => movie.year === year);
  console.log("Movie ID:", movies[index].id);

  if (index !== -1) {
    movies.splice(index, 1);
    saveMoviesToJSON();
    console.log("Movie deleted successfully!");
  } else {
    console.log("Movie not found!");
  }
};

const deleteMovieByGenre = () => {
  const genre = input("Enter movie genre: ");
  const index = movies.findIndex((movie) => movie.genre === genre);
  console.log("Movie ID:", movies[index].id);
  if (index !== -1) {
    movies.splice(index, 1);
    saveMoviesToJSON();
    console.log("Movie deleted successfully!");
  } else {
    console.log("Movie not found!");
  }
};

const searchMovie = () => {
  const choice = input("Enter search by title or director or year or genre: ");
  switch (choice) {
    case "title":
      searchMovieByTitle();
      break;
    case "director":
      searchMovieByDirector();
      break;
    case "year":
      searchMovieByYear();
      break;
    case "genre":
      searchMovieByGenre();
      break;
    default:
      break;
  }
};

const searchMovieByTitle = () => {
  const title = input("Enter movie title: ");
  const index = movies.findIndex((movie) => movie.title === title);
  console.log("Movie ID:", movies[index].id);
  if (index !== -1) {
    console.log(movies[index]);
  } else {
    console.log("Movie not found!");
  }
};

const searchMovieByDirector = () => {
  const director = input("Enter movie director: ");
  const index = movies.findIndex((movie) => movie.director === director);
  console.log("Movie ID:", movies[index].id);
  if (index !== -1) {
    console.log(movies[index]);
  } else {
    console.log("Movie not found!");
  }
};

const searchMovieByYear = () => {
  const year = input("Enter movie year: ");
  const index = movies.findIndex((movie) => movie.year === year);
  console.log("Movie ID:", movies[index].id);
  if (index !== -1) {
    console.log(movies[index]);
  } else {
    console.log("Movie not found!");
  }
};

const searchMovieByGenre = () => {
  const genre = input("Enter movie genre: ");
  const index = movies.findIndex((movie) => movie.genre === genre);
  console.log("Movie ID:", movies[index].id);
  if (index !== -1) {
    console.log(movies[index]);
  } else {
    console.log("Movie not found!");
  }
};

const filterMovies = () => {
  const choice = input("Enter filter by year or genre: ");
  switch (choice) {
    case "year":
      filterMoviesByYear();
      break;
    case "genre":
      filterMoviesByGenre();
      break;
    default:
      break;
  }
};

const filterMoviesByYear = () => {
  const year = input("Enter movie year: ");
  const filteredMovies = movies.filter((movie) => movie.year === year);
  if (filteredMovies.length > 0) {
    console.log(filteredMovies);
  } else {
    console.log("No movies found!");
  }
};

const filterMoviesByGenre = () => {
  const genre = input("Enter movie genre: ");
  const filteredMovies = movies.filter((movie) => movie.genre === genre);
  if (filteredMovies.length > 0) {
    console.log(filteredMovies);
  } else {
    console.log("No movies found!");
  }
};

const saveMoviesToJSON = () => {
  try {
    fs.writeFileSync("movies.json", JSON.stringify(movies));
    console.log("File is written successfully!");
  } catch (err) {
    console.log(`Error writing file: ${err}`);
  }
};

const main = () => {
  fs.readFile("movies.json", "utf8", (err, fileData) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      try {
        const parsedData = JSON.parse(fileData);
        if (Array.isArray(parsedData)) {
          movies.push(...parsedData);
        }
      } catch (parseError) {
        console.log(`Error parsing JSON: ${parseError}`);
      }
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
        case "5":
          searchMovie();
          break;
        case "6":
          filterMovies();
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
