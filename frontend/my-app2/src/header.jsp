<%@ page pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<link rel="stylesheet" href="/resources/css/header.css">
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap" rel="stylesheet">
<script src="https://kit.fontawesome.com/1a503258d7.js" crossorigin="anonymous"></script>
<script src="/resources/js/header.js" defer></script>

<header>
    <nav class="navbar">
       <div class="navbar_logo">
       <a href="/"><img src="/resources/img/logo2.jpg" alt="Logo"></a>
       </div>

       <ul class="navbar_menu">
          <li><a href="/">메인</a></li>
          <li><a href="/movie/movies">영화</a></li>
          <li><a href="/movie/reserve">예매하기</a></li>
          <li><a href="#">공지사항</a></li>
        <c:if test="${sessionScope.userid eq 'admin'}">
          <li><a href="/movie/movie_register">영화등록/관리</a></li>
          <li><a href="/movie/theater_register">지점등록/관리</a></li>
        </c:if>
       </ul>

       <ul class="navbar_member">
          <c:choose>
            <c:when test="${empty sessionScope.userid}">
               <li><a href="/login/login">로그인</a></li>
               <li><a href="/join/joinmember">회원가입</a></li>
            </c:when>
            <c:otherwise>
               <li><a href="/login/logout">로그아웃</a></li>
            </c:otherwise>
          </c:choose>
       </ul>

       <a href="#" class="navbar_btn">menu</a>
    </nav>
</header>
