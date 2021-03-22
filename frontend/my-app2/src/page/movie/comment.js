import React from "react";
import axios from "axios";
import CommentList from "./commentList";
import PageNation from "../PageNation";
import CommentInsert from "./commentInsert";

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.TloadComment = null;
        this.state = {
            loading: false,
            commentList: [],
            pageMaker: [],
            currentPage: 1
        };
    }

    loadCommentWrapper(wrapper){
        this.TloadComment = wrapper
    }




    // componentDidUpdate(prevProps, prevState) {
    //     console.log(this.state.commentList);
    //     // if (this.state.commentList[0].comment_no !== prevState.commentList[0].comment_no) {
    //     //     // this.loadComment();
    //     //     console.log("test");
    //     // }
    // }

    render() {
        // const commentList = this.state.commentList;
        const {commentList, pageMaker} = this.state;
        console.log(pageMaker);

        return (
            <>
                <div className="comment_box">
                    <div className="comment_intro">
                        <h2>영화후기 및 감상평을 남겨주세요!</h2>
                    </div>

                    <div className="comment_view" id="comment_view">
                        <ul id="output_comment">
                            <CommentInsert movie_no={this.props.movieNo}/>
                            <CommentList commentData={commentList} loadCommentWrapper={this.loadCommentWrapper}/>
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
