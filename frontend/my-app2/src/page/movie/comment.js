import React from "react";
import axios from "axios";
import CommentList from "./commentList";
import PageNation from "../PageNation";

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            commentList: [],
            pageMaker: [],
            currentPage: 1
        };
    }

    loadComment = async () => {
        const pageNo = this.props.match.params.pageNo;
        console.log(pageNo);
        // if (pageNo === 1)
        // console.log("detail params : " + param);
        // console.log(this.props.movieNo);

        axios
            .get('/comments/' + this.props.movieNo + '/'+pageNo)
            .then(({data}) => {
                this.setState({
                    loading: true,
                    commentList: data.commentList,
                    pageMaker: data.pageMaker
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

    componentDidUpdate(prevProps) {
        if (this.props.movieNo !== prevProps.movieNo) {
            this.loadComment();
        }
    }

    render() {
        const commentList = this.state.commentList;
        const {pageMaker} = this.state;
        console.log(pageMaker);
        return (
            <>
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
                                return (
                                    <CommentList key={commentData.comment_no} commentData={commentData}/>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="page_nation">
                    <ul id="pagination">
                        <PageNation PageMaker = {pageMaker} path = {'/comments/'+this.props.movieNo + '/'}/>
                    </ul>
                </div>
            </>
        );
    }

}

export default Comment;
