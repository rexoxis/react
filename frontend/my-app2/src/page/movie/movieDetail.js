import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import movie_detail from "../../css/movie_detail.css"

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
        const movie_info = this.state.movie_info;
        return (
            <>
            <div className="main">
                <div className="container">
                    <div className="contents">
                        <div className="movie_info_detail">
                            <p className="title">{movie_info.title}</p>
                            <p className="genre">{movie_info.genre}</p>
                            <p className="director">{movie_info.director}</p>
                            <p className="actor">{movie_info.actor}</p>
                            <p className="running_time">{movie_info.running_time}</p>
                            <p className="opening_date">{movie_info.opening_date}</p>
                        </div>

                        <div className="movie_info_img">
                            <Link to="#"><img src="/resources/img/movie_poster1.jpg" alt=""/></Link>
                            <button type="button">예매하기</button>
                        </div>

                    </div>
                    <div className="summary">
                        <h4>줄거리</h4>
                        <p id="movie_summary">{movie_info.summary}</p>


                    </div>

                    {/*후기 및 감상평*/}
                    <div className="comment_box">
                        <div className="comment_intro">
                            <h2>영화후기 및 감상평을 남겨주세요!</h2>
                        </div>


                        <div className="comment_view" id="comment_view">
                            <ul id="output_comment">
                                <li>
                                    <div className="input_comment">
                                        <i className="far fa-comment-alt"></i>
                                        <div className="set_userid" id="userid"></div>
                                        <div className="score" id="score">10</div>
                                        <textarea name="content" id="content" cols="50" rows="4"/>
                                        <button type="button" className="okbtn" id="okbtn">감상평 등록</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="page_nation">
                        <ul id="pagination">


                        </ul>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default MovieDetail;