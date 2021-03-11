<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<html>

<head>
    <link rel="stylesheet" href="/resources/css/movie_register.css">
    <%--    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">--%>
    <!-- 파비콘 설정 -->
    <link rel="shortcut icon" href="#">
    <title>Movies</title>
</head>

<body>
<%@include file="../layout/header.jsp" %>

<div class="main">
    <div class="container">
        <div class="movieform_area">
            <h2>영화 등록</h2>
            <form id="movie_form" method="post" enctype="multipart/form-data" action="/movies/info">
                <div class="movie_register">
                    <div class="info_label">
                        <span>영화 제목</span>
                        <span>장르</span>
                        <span>감독</span>
                        <span>출연배우</span>
                        <span>러닝타임</span>
                        <span>개봉일</span>
                        <span>줄거리</span>
                        <span class="poster">포스터</span>
                    </div>
                    <div class="info_insert">
                        <input type="text" id="title" name="title">
                        <input type="text" id="genre" name="genre">
                        <input type="text" id="director" name="director">
                        <input type="text" id="actor" name="actor">
                        <input type="text" id="running_time" name="running_time">
                        <input type="text" id="opening_date" name="opening_date">
                        <textarea name="summary" id="summary" cols="40" rows="10"></textarea>
                        <input type="file" id="file" name="file">
                        <input type="hidden" id="select_movieInfo_no" name="movie_no">
                    </div>
                </div>
                <div class="checkBox">
                    <label><input type="checkbox" class="opencheck" name="opencheck" value="0">개봉작</label>
                    <label><input type="checkbox" class="opencheck" name="opencheck" value="1">개봉예정작</label>
                </div>
                <div class="movie_btnbox">
                    <button type="button" id="movie_okbtn">등록</button>
                    <button type="button" id="movie_canclebtn">취소</button>
                </div>
            </form>
            <div class="movielist_area">
                <h3>등록된 상영영화 목록</h3>
                <div class="movie_list" id="movie_list">
                    <ul>

                    </ul>
                </div>
            </div>
        </div>
        <div class="showingform_area">
            <div class="showing_info_area">
                <h2>상영 정보 등록</h2>
                <form id="showing_info_form">
                <div class="showing_register">
                    <div class="theater_info">
                        <span>영화명</span>
                        <span>지점명</span>
                        <span>상영관</span>
                        <span>상영날짜</span>
                        <span>상영시간</span>
                    </div>
                    <div class="theater_info_insert">
                        <input type="text" id="movie_title" placeholder="등록된 영화에서 선택" disabled>
<%--                        <input type="text" id="theater" name="theater_name">--%>
                        <select name="theater_no" id="select_theater_name">

                        </select>
                        <select name="room_no" id="select_seat_name">

                        </select>
                        <input type="text" id="showing_date" name="show_date">
                        <input type="text" id="showing_time" name="show_time">
<%--                        <input type="hidden" id="select_theater_no" name="theater_no">--%>
                        <input type="hidden" id="select_showing_info_no" name="showing_info_no">
                        <input type="hidden" id="select_movie_no" name="movie_no">
                    </div>
                </div>
                <div class="reg_btnbox">
                    <button type="button" id="showing_okbtn">등록</button>
                    <button type="button" id="showing_canclebtn">취소</button>
                </div>
                </form>
            </div>
            <div class="showinglist_area">
                <h3>등록된 상영정보</h3>
                <div class="showing_movie_list">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>상영관</th>
                            <th>영화제목</th>
                            <th>상영날짜</th>
                            <th>상영시간</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<%@include file="../layout/footer.jsp" %>

<script src="/resources/js/jquery-3.3.1.min.js" type="text/javascript"></script>
<script src="/resources/js/movie_register.js" type="text/javascript"></script>

</body>
</html>
