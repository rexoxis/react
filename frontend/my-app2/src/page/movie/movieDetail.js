import React, {Component} from "react";
import axios from "axios";
import "../../css/movie_detail.css"
import Comment from "./comment";
import MovieDetailList from "./movieDetailList";

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            movie_info: [],
            commentList: [],
            pageMaker: []
        };
    }

    loadDetail = async () => {
        const param = this.props.match.params.movieNo;
        // console.log("detail params : " + param);

         axios
            .get('/movies/detail/' + param)
            .then(({data})  => {
                this.setState({
                    loading: true,
                    movie_info: data.movie_info
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };

    // loadComment = async () => {
    //     const param = this.props.match.params.movieNo;
    //
    //     axios
    //         .get('/comments/' + param + '/1')
    //         .then(({data}) => {
    //             this.setState({
    //                 loading: true,
    //                 commentList: data.commentList,
    //                 pageMaker: data.pageMaker
    //             });
    //         })
    //         .catch(e => {
    //             console.error(e);
    //             this.setState({
    //                 loading: false
    //             });
    //         });
    // };

    componentDidMount() {
        this.loadDetail();
        // this.loadComment();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.movieNo !== prevProps.match.params.movieNo) {
            this.loadDetail();
        }
        // if (this.props.match.params.movieNo !== prevProps.match.params.movieNo) {
        //     this.loadDetail();
        // }
    }

    render() {
        const {movie_info} = this.state;
        // const {commentList} = this.state;
        // const {pageMaker} = this.state;
        // console.log(movie_info.movie_no);
        return (
            <div className="detail_main">
                <div className="detail_container">
                    <MovieDetailList movie_info={movie_info}/>

                    <Comment movieNo={this.props.match.params.movieNo}/>

                </div>
            </div>

        );
    }
}

export default MovieDetail;