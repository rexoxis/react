<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>

<head>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/reserve.css">
    <!-- 파비콘 설정 -->
    <link rel="shortcut icon" href="#">
    <title>Movies</title>
</head>

<body>
<%@include file="../layout/header.jsp" %>

<div class="main">
    <div class="container">
        <div>
            <h2>영화예매</h2>
        </div>
        <div class="today">
            <h4>2020.04.30</h4>
        </div>
        <div class="mainbody">
            <div class="movie_area">
                <p>영화</p>
                <div class="movie_select">
                    <ul>

                    </ul>
                </div>
                <div class="selected_movie_area">
                    <h3>선택한 영화</h3>
                    <span></span>
                </div>
            </div>

            <div class="theater_area">
                <p>영화관</p>
                <div class="theater_select">
                    <ul>

                    </ul>
                </div>
                <div class="selected_theater_area">
                    <h3>선택한 영화관</h3>
                    <span></span>
                </div>
            </div>
            <div class="time_area">
                <p>시간</p>
                <div class="time_select">
                    <div class="schedule">
                        <div class="date">

                        </div>
                        <div class="time">

                        </div>
                    </div>
                    <div class="select_list">
                        <ul>

                        </ul>
                    </div>
                </div>
                <div class="selected_time_area">
                    <h3>선택한 시간</h3>
                    <span></span>
                </div>
            </div>
            <div class="seats_area">
                <p>좌석</p>
                <div class="seats_select">
                    <div class="numOfPeople">
                        <span>인원수 선택(최대 4매) </span>
                        <select class="selected_num">
                            <option value="1">1명</option>
                            <option value="2">2명</option>
                            <option value="3">3명</option>
                            <option value="4">4명</option>
                        </select>
                    </div>

                    <div class="seats_wrap">
                        <div class="seats">

                        </div>
                    </div>
                </div>
                <div class="selected_seats_area">
                    <h3>선택한 좌석</h3>
                    <span></span>
                </div>
            </div>
        </div>

        <div class="reserve_btn">
            <button type="button" id="reserve_btn">결제하기</button>
            <button type="button" id="reset_btn">다시 선택</button>
        </div>

    </div>
</div>

<%@include file="../layout/footer.jsp" %>

<script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript"></script>
<script src="/resources/js/reserve.js" type="text/javascript"></script>
<script src="/resources/js/seats.js" type="text/javascript"></script>

</body>
</html>
