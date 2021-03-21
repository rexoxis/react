import React from "react";
import axios from "axios";

class CommentInsert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: 'test',
            content: 'test',
            score: 10,
            movie_no: 1,
            result : 'fail'
        }
    }

    handle_insert = () => {
        this.insert_comment()
    }

    insert_comment = async () => {

        axios
            .post('/comment', {
                userid: this.state.userid,
                content: this.state.content,
                score: this.state.score,
                movie_no: this.state.movie_no,
            })
            .then(({data})  => {
                this.setState({
                    result: data
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    result: '댓글쓰기 실패'
                });
            });
    }

    render() {
        return(
            <>
            <li>
                <div className="input_comment">
                    <i className="far fa-comment-alt"></i>
                    <div className="set_userid" id="userid"></div>
                    <div className="score" id="score">10</div>
                    <textarea name="content" id="content" cols="50" rows="4"></textarea>
                    <button type="button" className="okbtn" id="okbtn">감상평 등록</button>
                </div>
            </li>
            </>
        );
    }

}
export default CommentInsert;