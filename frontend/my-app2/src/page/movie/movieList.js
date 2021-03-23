import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import PageNation from "../PageNation";


class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            movieList: [],
            pageMaker: []
            // currentPage: 1
        };
    }

    /*handlePageChange = (currentPageNum) => {
        this.setState({
           currentPage: currentPageNum
        });
    }*/

    loadMovies = async () => {
        const pageNo = this.props.pageNo;
        axios
            .get('/movies/' + pageNo)
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
        if (this.props.pageNo !== prevProps.pageNo) {
            this.loadMovies();
        }
    }

    render() {
        const {movieList, pageMaker} = this.state;
        console.log(movieList);
        return (
            <>
                <div className="movies_main">

                    <div className="movie_wrap" id="movie_wrap">
                        {movieList && movieList.map((moviedata) => {
                            return (
                                <div className="movie" key={moviedata.movie_no}>
                                    <Link to={'/movies/detail/' + moviedata.movie_no}>
                                        <img src={process.env.PUBLIC_URL + '/img/' + moviedata.poster} alt="POSTER"
                                             className="poster"/></Link>
                                    <div className="movie_info">
                                        <span className="movie_title"><Link
                                            to={"/movies/detail/" + moviedata.movie_no}>{moviedata.title}</Link></span>
                                        <span><Link
                                            to={"/movies/detail/" + moviedata.movie_no}>{moviedata.opening_date}</Link></span>
                                        <button><Link to={"/movies/detail/" + moviedata.movie_no}>예매하기</Link></button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                <div className="page_nation">
                    <ul id="pagination">
                        <PageNation PageMaker={pageMaker} path={"/movies/"}/>
                    </ul>
                </div>
            </>

        );
    }
}

export default MovieList;


