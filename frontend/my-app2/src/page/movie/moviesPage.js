import React, {Component} from "react";
import MovieList from "./movieList";
import {Link} from "react-router-dom";
import "../../css/movies.css";

class MoviesPage extends Component {

    render(){
    const pageNo = this.props.match.params.pageNo;
        // const movieList = this.state.movieList; // 쓰는 방식 차이
        // const { pageMaker } = this.state;
        // console.log(pageMaker);
        // console.log(pageNo);
        return(
            <>
                <div className="movieArea">
                    <nav className="movie_nav">
                        <ul>
                            <li><Link to="/movie/movies"><span>현재 상영작</span></Link></li>
                            <li><Link to="/movie/movies"><span>개봉 예정작</span></Link></li>
                        </ul>
                    </nav>
                    <MovieList pageNo={pageNo} />

                </div>
            </>
        );
    }
}
export default MoviesPage;


