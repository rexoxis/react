import React from "react";
import axios from "axios";

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            commentList: [],
            pageMaker: []
        };
    }

    loadComment = async () => {
        const movieNo = this.props.movieNo;
        // const pageNo = this.props.match.params.pageNo;
        // console.log("detail params : " + param);
        console.log(this.props);

        axios
            .get('/comments/' + movieNo + '/1')
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
        this.loadComment();
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.match.params.pageNo !== prevProps.match.params.pageNo) {
    //         this.loadComment();
    //     }
    // }

    render() {
        const commentList = this.state.commentList; // 쓰는 방식 차이
        const { pageMaker } = this.state;
        return(
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
                                <textarea name="content" id="content" cols="50" rows="4"></textarea>
                                <button type="button" className="okbtn" id="okbtn">감상평 등록</button>
                            </div>
                        </li>
                        {commentList && commentList.map((commentData) => {
                            return(
                        <li id="commentList">
                            <div className="user_id">{commentData.userid}</div>
                            <div className="user_score">{commentData.score}</div>
                            <div className="user_comment"><p>{commentData.content}</p></div>
                            <div className="regdate">{commentData.regdate}</div>
                        </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }

}
export default Comment;
