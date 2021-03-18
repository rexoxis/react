import React from "react";
import {Link} from "react-router-dom";

class MovieDetailList extends React.Component {
    render() {
        const movie_info = this.props.movie_info;
        console.log(movie_info);
        return(
            <>
            <div className="detail_contents">
                <div className="movie_info_detail">
                    <p className="title">{movie_info.title}</p>
                    <p className="genre">{movie_info.genre}</p>
                    <p className="director">{movie_info.director}</p>
                    <p className="actor">{movie_info.actor}</p>
                    <p className="running_time">{movie_info.running_time}</p>
                    <p className="opening_date">{movie_info.opening_date}</p>
                </div>

                <div className="movie_info_img">
                    <Link to="#"><img src={process.env.PUBLIC_URL + '/img/' + movie_info.poster} alt=""/></Link>
                    <button type="button">예매하기</button>
                </div>

            </div>
        <div className="summary">
            <h4>줄거리</h4>
            <p id="movie_summary">{movie_info.summary}</p>

        </div>
            </>
        );
    }
}
export default MovieDetailList;