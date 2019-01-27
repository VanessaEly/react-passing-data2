import React, {Component} from 'react';
import MovieDetails from './MovieDetails';

class MovieDashboard extends Component {
  render() {
    // save props into variables
    const { users, movies, usersByMovie } = this.props;
    console.log(movies);
    // movies is an object and map can't be used in objects,
    // that's why we first need to get its keys, and then map through it
    return Object.keys(movies).map(id => (
      <MovieDetails key={id} movie={movies[id]} usersByMovie={usersByMovie[id]} users={users} />
    ));
  };
}

export default MovieDashboard;