import React from "react";

function MovieList( {movie_no, poster, title, opening_date} ) {
    return (
        <div className="movie">
            <a href="#">
                <img src = {poster} alt="POSTER" className="poster"/></a>
            <div className="movie_info">
                <span className="movie_title"><a href="#">{title}</a></span>
                <span><a href="#">{opening_date}</a></span>
                <button><a href="#">예매하기</a></button>
            </div>
        </div>
    );
}
export default MovieList;


