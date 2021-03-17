import React from "react";
import {Link} from "react-router-dom";


function MovieList({movie_no, poster, title, opening_date}) {
    return (

        <div className="movies_main">

            <div className="movie_wrap" id="movie_wrap">
                <div className="movie">
                    <Link to={'/movies/detail/' + movie_no}>
                        <img src={process.env.PUBLIC_URL + '/img/' + poster} alt="POSTER" className="poster"/></Link>
                    <div className="movie_info">
                        <span className="movie_title"><Link to={"/movies/detail/" + movie_no}>{title}</Link></span>
                        <span><Link to={"/movies/detail/" + movie_no}>{opening_date}</Link></span>
                        <button><Link to={"/movies/detail/" + movie_no}>예매하기</Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MovieList;


