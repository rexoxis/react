import React from "react";
import "../../css/login.css";
import axios from "axios";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputId: '',
            inputPw: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handle_login = this.handle_login.bind(this);
    }

    handle_login() {
        this.loginCheck();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    loginCheck = async () => {
        axios.post('/login', {
            userid: this.state.inputId,
            passwd: this.state.inputPw
        }).then(({data}) => {
            if (data === 'success') {
                console.log(data);
            } else {
                console.log(data);
            }
        }).catch(e => {
            console.error(e);
            console.log('로그인 실패');
        });
    }


    render() {
        return(
            <div className="login_main">
                <div className="loginid">
                    <span>아이디</span>
                    <input type="text" name="inputId" value={this.state.inputId} onChange={this.handleChange}/>
                </div>
                <div className="loginpwd">
                    <span>비밀번호</span>
                    <input type="password" name="inputPw" value={this.state.inputPw} onChange={this.handleChange}/>
                </div>
                <div className="loginbtn">
                    <button type="button" id="loginSubmit" onClick={this.handle_login}>로그인</button>
                    <button type="button" id="loginCancle">취소하기</button>
                </div>
            </div>
        );
    }
}
export default LoginForm;