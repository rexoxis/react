import React from "react";

class CommentList extends React.Component {

    render() {
        const {commentData} = this.props;
        return(
            <li id="commentList">
                <div className="user_id">{commentData.userid}</div>
                <div className="user_score">{commentData.score}</div>
                <div className="user_comment"><p>{commentData.content}</p></div>
                <div className="regdate">{commentData.regdate}</div>
            </li>
        );
    }
}
export default CommentList;