import React from "react";
import axios from "axios";

class CommentList extends React.Component {

    loadComment = async () => {
        const pageNo = 1
        console.log(pageNo);

        // if (pageNo === 1)
        // console.log("detail params : " + param);
        // console.log(this.props.movieNo);

        axios
            .get('/comments/' + this.props.movieNo + '/' + this.state.currentPage)
            .then(({data}) => {
                this.setState({
                    loading: true,
                    commentList: data.commentList,
                    pageMaker: data.pageMaker
                });
                console.log(this.state.commentList);
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };

    componentDidMount() {
        // this.loadComment();
        this.props.loadCommentWrapper(this.loadComment);
    }

    componentDidUpdate(prevProps) {
        // if (prevProps && this.props.commentData) {
        //     console.log("ff");
        //     console.log(this.props.commentData[0].userid);
            // console.log(prevProps.commentData[0]);

            // if (this.props.commentData[0].comment_no !== prevProps.commentData[0].comment_no) {
            //     // this.props.fnc();
            //
            //     console.log(this.props.commentData[0].userid);
            //     console.log(prevProps.commentData[0]);
            //     console.log("fuck");
            // }
        // }
        // console.log(this.props.commentData[0]);
        // console.log(this.props.commentData[1]);
        // console.log(this.props.commentData[2]);
        // console.log(this.props.commentData[3]);
        // console.log(prevProps);
        // console.log(this.props.commentData[0]);
        // console.log(revProps.commentData[0]);

    }

    render() {
        const {commentData} = this.props;

        return(
                <>
            {commentData.map((moviedata) => {
                return(
                <li id="commentList">
                    <div className="user_id">{moviedata.userid}</div>
                    <div className="user_score">{moviedata.score}</div>
                    <div className="user_comment"><p>{moviedata.content}</p></div>
                    <div className="regdate">{moviedata.regdate}</div>
                </li>
                );
            })}
                </>
        );
    }
}
export default CommentList;