import React from "react";
import "../../css/login.css";

class LoginForm extends React.Component {


    render() {
        return(
            <div className="login_main">
                <div className="loginid">
                    <span>아이디</span>
                    <input type="text" id="loginUserid"/>
                </div>
                <div className="loginpwd">
                    <span>비밀번호</span>
                    <input type="password" id="loginPasswd"/>
                </div>
                <div className="loginbtn">
                    <button type="button" id="loginSubmit">로그인</button>
                    <button type="button" id="loginCancle">취소하기</button>
                </div>
            </div>
        );
    }
}
export default LoginForm;