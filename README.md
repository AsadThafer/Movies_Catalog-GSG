<p align="center">
    <img src="https://d2win24dv6pngl.cloudfront.net/media/images/1-logo-GSG.max-600x600.png" width="40%">
</p>
<h1 align="center"> Movie Catalog Management System - GSG </h1>

This project is a Movie Catalog Management System developed as part of the Project 3 for the JavaScript training at Gaza Sky Geeks. The system allows users to perform various actions such as displaying the movies catalog, adding new movies, updating existing movies, deleting movies, searching for movies, filtering movies by year or genre, and fetching movies from an external API and saving them to the database.

## Getting Started
To get started with the Movie Catalog Management System, follow the instructions below:

* Clone the repository to your local machine.
* Install the required dependencies by running the following command:
```
npm install
```
* Run the program by executing the following command:
```
node main.js
```
* The program will display a menu with different options. Enter the choice number to perform the desired action.
## Features
### 1. Display Movies Catalog
display the list of movies in the catalog. The program will retrieve the movies from the database and display them on the console.

### 2. Add New Movie
You will be prompted to enter the title, director, year, and genre of the movie. Once entered, the movie will be added to the catalog and saved to the database.

### 3. Update a Movie
 You can update a movie by its title, director, year, or genre. Enter the corresponding choice, and then provide the necessary details for the update. The movie will be updated in the catalog and the changes will be saved to the database.

### 4. Delete a Movie
You can choose to delete a movie by its title, director, year, or genre. Enter the corresponding choice and provide the relevant information. The movie will be removed from the catalog and the changes will be saved to the database.

### 5. Search for a Movie
search for a movie in the catalog. You can search for a movie by its title, director, year, or genre. Enter the corresponding choice and provide the search query. If a movie matching the search criteria is found, its details will be displayed on the console.

### 6. Filter Movies
filter the movies in the catalog by year or genre. Choose the desired filter option and provide the necessary details. The program will display the movies that match the filter criteria.

### 7. Fetch Movies from API and Save to DB
fetch movies from an external API and save them to the database. The program will retrieve the movies from the API and add them to the catalog. The changes will be saved to the database.



## Database
The program uses a JSON file, "movies.json", as the database to store the movie catalog. The file is read at the start of the program, and any modifications to the catalog are saved back to the file.

## Dependencies
The Movie Catalog Management System relies on the following dependencies:

* prompt-sync: Allows synchronous user input in the command-line interface.
* fs: Provides file system-related functionality.
These dependencies are automatically installed when you run npm install.

## Contributing
If you would like to contribute to this project, please follow the guidelines below:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit your code.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Please ensure that your code adheres to the existing coding style and conventions.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgements
[Gaza Sky Geeks](https://gazaskygeeks.com/) for providing the JavaScript training and inspiring this project.

## Contact
For any inquiries or feedback, please contact me at : asad.thaferasad@gmail.com .
