import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieDashboard from './MovieDashboard';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    // new object that will be used to store all movies and the users that liked it
    this.usersByMovie = [];
    
    console.log(profiles);
    // looping through profiles to find out who liked which movie
    // using forEach instead of map, because map expects to return a list, and that's not what we need
    profiles.forEach(profile => {
      // if movie was not already added to the list, add a new object
      if (!this.usersByMovie[profile.favoriteMovieID]) {
        // the object will have the format { movieId: [userID1, userID2, userID3] }
        this.usersByMovie[profile.favoriteMovieID] = [profile.userID];
      } else {
        // if the movie was already added, push the user into the movies's list
        this.usersByMovie[profile.favoriteMovieID].push(profile.userID);
      }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
		<MovieDashboard users={users} movies={movies} usersByMovie={this.usersByMovie} />
      </div>
    );
  }
}

export default App;
