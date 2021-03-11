import React, {Component} from "react";
import MovieList from "./movieList";
import axios from "axios";
import {Link} from "react-router-dom";

class LoadMovies extends Component {
    state = {
        loading: false,
        movieList: []
    };

    loadMovies = async () => {
        axios
            .get('/movies/1')
            .then(({data}) => {
                this.setState({
                    loading: true,
                    movieList: data.movieList
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };

    componentDidMount() {
        this.loadMovies();
    }


    render(){
        const { movieList } = this.state;
        console.log(movieList);

        return(
            <MoviesPage Movielist = {movieList}/>
        );
    };
}
export default LoadMovies;

class MoviesPage extends Component {
    state = {};

    render() {
        const {Movielist} = this.props;

        return (
            <div className="movieArea">
                <nav className="movie_nav">
                    <ul>
                        <li><Link to="/movie/movies"><span>현재 상영작</span></Link></li>
                        <li><Link to="/movie/movies"><span>개봉 예정작</span></Link></li>
                    </ul>
                </nav>
                {Movielist && Movielist.map((moviedata) => {
                    return(
                        <>
                            <MovieList
                                movie_no = {moviedata.movie_no}
                                poster = {moviedata.poster}
                                title = {moviedata.title}
                                opening_date = {moviedata.opening_date}
                            />
                        </>
                    );
                })}
            </div>
        );
    }
}
