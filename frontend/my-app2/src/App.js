import React, {Component} from 'react';
import axios from "axios";
import MoviesPage from "./page/movie/moviesPage";
import Clock from "./page/movie/testTimer";
import MovieDetail from "./page/movie/movieDetail";
import {Route} from "react-router-dom"


class App extends Component {
/*
  state = {
    loading : false,
    commList : []
  };

  loadComment = async () => {
    axios
        .get('/movies/1')
        .then(({ data }) => {
          this.setState({
            loading : true,
            movieList : data.movieList
          });
        })
        .catch(e => {
          console.error(e);
          this.setState({
            loading : false
          });
        });
  };

  componentDidMount() {
    this.loadComment();
  }*/

  render() {
    {/*
      const { movieList } = this.state;

      console.log(movieList);
*/}
      return(
        <div>
            {/*
            <MoviesPage Movielist = {movieList}/>
            <Clock/>*/}
            <Route exact path = "/" component={MoviesPage} />
            <Route path = "/detail" component={MovieDetail} />
        </div>
      );

  }
}
export default App;