import React from "react";
import {Link} from "react-router-dom";
import movies from "../../css/movies.css";

function MovieList( {movie_no, poster, title, opening_date} ) {
    return (
        <div className="movies_main">

            <div className="movie_wrap" id="movie_wrap">
                <div className="movie">
                    <a href="#">
                        <img src = {poster} alt="POSTER" className="poster"/></a>
                    <div className="movie_info">
                        <span className="movie_title"><a href="#">{title}</a></span>
                        <span><a href="#">{opening_date}</a></span>
                        <button><a href="#">예매하기</a></button>
                    </div>
                </div>
            </div>


            <div className="page_nation">
                <ul id="pagination">


                </ul>
            </div>
        </div>

    );
}
export default MovieList;


