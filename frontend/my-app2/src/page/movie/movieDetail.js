import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "../../css/movie_detail.css"
import Comment from "./comment";

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            movie_info: []
        };
    }

    loadDetail = async () => {
        const param = this.props.match.params.movieNo;
        // console.log("detail params : " + param);

        axios
            .get('/movies/detail/' + param)
            .then(({data}) => {
                this.setState({
                    loading: true,
                    movie_info: data.movie_info,

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
        this.loadDetail();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.movieNo !== prevProps.match.params.movieNo) {
            this.loadDetail();
        }
    }

    render() {
        const {movie_info} = this.state;
        console.log(movie_info.movie_no);
        return (
            <div className="detail_main">
                <div className="detail_container">
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

                    <Comment movieNo = {movie_info.movie_no}/>

                </div>
            </div>

        );
    }
}

export default MovieDetail;