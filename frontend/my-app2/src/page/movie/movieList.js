import React from "react";
import {Link} from "react-router-dom";
import movies from "../../css/movies.css";

function MovieList({movie_no, poster, title, opening_date}) {
    return (
        <div className="movies_main">

            <div className="movie_wrap" id="movie_wrap">
                <div className="movie">
                    <Link to="/movie">
                        <img src={process.env.PUBLIC_URL + '/img/' + poster} alt="POSTER" className="poster"/></Link>
                    <div className="movie_info">
                        <span className="movie_title"><Link to="#">{title}</Link></span>
                        <span><Link to="#">{opening_date}</Link></span>
                        <button><Link to="#">예매하기</Link></button>
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


