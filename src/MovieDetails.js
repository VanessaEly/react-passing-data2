import React, {Component} from 'react';

class MovieDetails extends Component {
  constructor(props) {
    super();
    console.log(props);
  }
  render() {
    const {movie, usersByMovie, users} = this.props;
  	return (
      <div>
        <h2>{movie.name}</h2>
      	{ !usersByMovie ? // check if the list doesn't exist, which means that nobody liked the movie
      	  (<p>None of the current users liked this movie</p>)
          : (
            <div>
              <p>Liked By:</p>
              <ul>
                  { 
      				// loop through all users by movie, and use their id to get their name in the user list
      				usersByMovie.map(userId => {
      					return <li key={userId}>{users[userId].name}</li>
                    })
                  }
              </ul>
            </div>
		  )
		}
  	  </div>
    );
  }
}

export default MovieDetails;