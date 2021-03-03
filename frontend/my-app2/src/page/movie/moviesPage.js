import React, {Component} from "react";
import MovieList from "./movieList";

class MoviesPage extends Component {
    state = {};

    render() {
        const {Movielist} = this.props;
        return (
            <div className="movieArea">
                {Movielist && Movielist.map((moviedata) => {
                    return(
                        <MovieList
                            movie_no = {moviedata.movie_no}
                            poster = {moviedata.poster}
                            title = {moviedata.title}
                            opening_date = {moviedata.opening_date}
                        />
                    );
                })}
            </div>
        );
    }
}
export default MoviesPage;