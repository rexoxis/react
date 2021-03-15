import React, {Component} from "react";
import MovieList from "./movieList";
import axios from "axios";
import {Link} from "react-router-dom";
import PageNation from "../PageNation";
import movies from "../../css/movies.css";

class LoadMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            movieList: [],
            pageMaker: [],
            currentPage: 1
        };
    }

    /*handlePageChange = (currentPageNum) => {
        this.setState({
           currentPage: currentPageNum
        });
    }*/

    loadMovies = async () => {
        const param = this.props.match.params.pageNo;
console.log("test : " + this.state.currentPage);
console.log("test2 : " + param);
console.log("props : " + this.props.match.path);
        axios
            .get('/movies/' + param)
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

    componentDidUpdate(prevProps) {
        /*if (this.state.currentPage !== prevState.currentPage) {
            this.loadMovies();
        }*/
        if (this.props.match.params.pageNo !== prevProps.match.params.pageNo) {
            this.loadMovies();
        }
    }

    render(){
        console.log(this.state);
        const movieList = this.state.movieList; // 쓰는 방식 차이
        const { pageMaker } = this.state;
        console.log(pageMaker);
        return(
            <>
                <MoviesPage Movielist = {movieList}/>
                <div className="page_nation">
                    <ul id="pagination">
                        <PageNation PageMaker = {pageMaker} path = {"/movies/"}/>
                    </ul>
                </div>
            </>
        );
    }
}
export default LoadMovies;

class MoviesPage extends Component {
    state = {};

    render() {
        const {Movielist} = this.props;
        console.log(this.props);
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
