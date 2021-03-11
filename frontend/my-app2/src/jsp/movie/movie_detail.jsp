<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>

<head>
    <link rel="stylesheet" href="/resources/css/movie_detail.css">
    <!-- 파비콘 설정 -->
    <link rel="shortcut icon" href="#">
    <title>Movies</title>
</head>

<body>
    <%@include file="../layout/header.jsp"%>

    <div class="main">
        <div class="container">
            <div class="contents">
                <div class="movie_info_detail">
                    <p class="title"></p>
                    <p class="genre"></p>
                    <p class="director"></p>
                    <p class="actor"></p>
                    <p class="running_time"></p>
                    <p class="opening_date"></p>
                </div>

                <div class="movie_info_img">
                    <a href="#"><img src="/resources/img/movie_poster1.jpg" alt=""></a>
                    <button type="button">예매하기</button>
                </div>

            </div>
            <div class="summary">
                <h4>줄거리</h4>
                <p id="movie_summary">

                </p>
            </div>

            <!-- 후기 및 감상평 -->
            <div class="comment_box">
                <div class="comment_intro">
                    <h2>영화후기 및 감상평을 남겨주세요!</h2>
                </div>


                <div class="comment_view" id="comment_view">
                    <ul id="output_comment">
                        <li>
                            <div class="input_comment">
                                <i class="far fa-comment-alt"></i>
                                <div class="set_userid" id="userid">${sessionScope.userid}</div>
                                <div class="score" id="score">10</div>
                                <textarea name="content" id="content" cols="50" rows="4"></textarea>
                                <button type="button" class="okbtn" id="okbtn">감상평 등록</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
                <div class="page_nation">
                    <ul id="pagination">


                    </ul>
                </div>
        </div>
    </div>

    <%@include file="../layout/footer.jsp"%>

<script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript"></script>
<script src="/resources/js/movie_detail.js" type="text/javascript"></script>

</body>
</html>
