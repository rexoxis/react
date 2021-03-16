<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<head>
    <link rel="stylesheet" href="/resources/css/join.css">
    <!-- 파비콘 설정 -->
    <link rel="shortcut icon" href="#">
    <title>Login</title>
</head>

<body>
    <%@include file="../layout/header.jsp"%>

    <div class="main">
        <div class="loginid">
            <span>아이디</span>
            <input type="text" id="loginUserid">
        </div>
        <div class="loginpwd">
            <span>비밀번호</span>
            <input type="password" id="loginPasswd">
        </div>
        <div class="loginbtn">
            <button type="button" id="loginSubmit">로그인</button>
            <button type="button" id="loginCancle">취소하기</button>
        </div>
    </div>

    <%@include file="../layout/footer.jsp"%>

<script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript"></script>
<script src="/resources/js/login.js" type="text/javascript"></script>

</body>
</html>
