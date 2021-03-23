import React from "react";
import CommentList from "./commentList";
import CommentInsert from "./commentInsert";

// 1. commentList 컴퍼넌트와 commnet 컴퍼넌트의 분리가 안되어 있었다 -> 컴퍼넌트에 대한 이해도가 부족했다.
//    - commentList 컴퍼넌트의 업데이트 체크를 해당 컴퍼넌트가 아닌 comment 컴퍼넌트에서 하고있었다.
//    - 떄문에 componentDidUpdate 메서드를 이용한 업데이트 체크가 제대로 되지 않아서 데이터가 제대로 조회되지 않았다. -> 라이프사이클에 대한 이해도가 없었다.
//      cooment 컴포넌트에서 commetlist의 값을 호출 하였기 때문에 commnetlist 에서 commentdidupdate 출력 데이터가 없었기 때문에 호출 순서에도 문제가 있었다.

//    - 이후 comment, commentList 컴퍼넌트를 분리로 각자 컴퍼넌트화를 시킴
//    - 각자 컴퍼넌트화를 시킨 후에 commentList에 있는 loadComment 메서드를 상위 컴퍼넌트인 comment 컴퍼넌트에 전달해준 후에, 다시 commentInsert 컴퍼넌트에 전달해줌
//    - 하지만 여전히 데이터 조회가 제대로 되지 않았음
//    - 이제 commentList 컴퍼넌트에서 componentDidUpdate 메서드에서 입력 받은 이전 state 값과 현재의 state 값을 비교하여 값이 같을 경우 새로 loadcomment를 호출하여 업데이트를 진행.

//   라이프사이클 외우기


class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.loadCommentWrapper = this.loadCommentWrapper.bind(this);
        this.state = {
            currentPage: 1
        };
    }

    loadCommentWrapper(wrapper) {
        // console.log("wrapper start");
        this.TloadComment = wrapper;
    }

    // TloadComment = (wrapper) => {
    //     console.log("TloadComment start");
    // }


    // componentDidUpdate(prevProps, prevState) {
    //     console.log(this.state.commentList);
    //     // if (this.state.commentList[0].comment_no !== prevState.commentList[0].comment_no) {
    //     //     // this.loadComment();
    //     //     console.log("test");
    //     // }
    // }

    render() {
        // const commentList = this.state.commentList;
        // const {commentList, pageMaker} = this.state;
        // console.log(commentList);

        return (
            <>
                <div className="comment_box">
                    <div className="comment_intro">
                        <h2>영화후기 및 감상평을 남겨주세요!</h2>
                    </div>

                    <div className="comment_view" id="comment_view">
                        <ul id="output_comment">
                            <CommentInsert movie_no={this.props.movieNo} loadCommentWrapper={this.TloadComment}/>
                            <CommentList loadCommentWrapper={this.loadCommentWrapper} pageNo={this.state.currentPage}
                                         movie_no={this.props.movieNo}/>
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
