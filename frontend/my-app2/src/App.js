import React, {Component} from 'react';
import axios from "axios";
import MoviesPage from "./page/movie/moviesPage";

class App extends Component {

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
  }

  render() {

      const { movieList } = this.state;

      console.log(movieList);

      return(
        <div>
            <MoviesPage Movielist = {movieList}/>
        </div>
      );

  }
}
export default App;