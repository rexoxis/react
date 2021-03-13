import React, {Component} from "react";
import MovieList from "./movieList";
import axios from "axios";
import {Link} from "react-router-dom";

class LoadMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            movieList: [],
            pageMaker: []
        };
    }

    loadMovies = async () => {
        const params = this.props.match.params.pageNo;

        axios
            .get('/movies/'+params)
            .then(({data}) => {
                this.setState({
                    loading: true,
                    movieList: data.movieList,
                    pageMaker: data.pageMaker
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
                                key = {moviedata.movie_no}
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
