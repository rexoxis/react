import React from "react";
import axios from "axios";

class CommentInsert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: 'test',
            content: 'test',
            score: 10,
            movie_no: this.props.movie_no,
            result: ''
        }

        this.handle_insert = this.handle_insert.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handle_insert() {
        this.insert_comment();
    }

    handleChange(e) {
        this.setState({
            content: e.target.value
        });
    }

    insert_comment = async () => {

        axios
            .post('/comment', {
                userid: this.state.userid,
                content: this.state.content,
                score: this.state.score,
                movie_no: this.state.movie_no,
            })
            .then(({data}) => {
                this.setState({
                    result: data,
                    content: ''
                });
                this.props.loadCommentWrapper();
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    result: '댓글쓰기 실패'
                });
            });
    }

    render() {
        return (
            <>
                <li>
                    <div className="input_comment">
                        <i className="far fa-comment-alt"></i>
                        {/*userid 세팅해야되는 부*/}
                        <div className="set_userid" id="userid" onChange={this.handleChange}/>
                        <div className="score" id="score">10</div>
                        <textarea name="content" id="content" cols="50" rows="4" value={this.state.content}
                                  onChange={this.handleChange}/>
                        <button type="button" className="okbtn" id="okbtn" onClick={this.handle_insert}>감상평 등록</button>
                    </div>
                </li>
            </>
        );
    }

}

export default CommentInsert;