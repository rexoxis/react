<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8"%>
<html>

<head>
    <link rel="stylesheet" href="/resources/css/movies.css">
    <!-- 파비콘 설정 -->
    <link rel="shortcut icon" href="#">
    <title>Movies</title>
</head>

<body>
    <%@include file="../layout/header.jsp"%>

    <div class="main">

        <nav class="movie_nav">
            <ul>
                <li><a href="/movie/movies"><span>현재 상영작</span></a></li>
                <li><a href="/movie/comingsoon"><span>개봉 예정작</span></a></li>
            </ul>
        </nav>
        <div class="movie_wrap" id="movie_wrap">

        </div>


        <div class="page_nation">
            <ul id="pagination">


            </ul>
        </div>
    </div>

    <%@include file="../layout/footer.jsp"%>

<script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript"></script>
<script src="/resources/js/movies.js" type="text/javascript"></script>

</body>
</html>
