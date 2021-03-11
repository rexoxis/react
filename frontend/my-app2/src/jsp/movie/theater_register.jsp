<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<html>

<head>
    <link rel="stylesheet" href="/resources/css/theater_register.css">
    <%--    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">--%>
    <!-- 파비콘 설정 -->
    <link rel="shortcut icon" href="#">
    <title>Movies</title>
</head>

<body>
<%@include file="../layout/header.jsp" %>

<div class="main">
    <div class="container">
        <div class="theaterform_area">
            <h2>지점 / 상영관 등록</h2>
            <div class="theater_register">
                <form action="" id="theater_form">
                    <label for="theater_name">지점명<input id="theater_name" name="theater_name" type="text"></label>
                </form>
                <div class="btn_area">
                    <button id="theaterOk_btn">등록</button>
                    <button id="theaterCancle_btn">취소</button>
                </div>
            </div>
            <div class="screening_room_register">
                <form action="" id="screening_room_form">
                    <label for="room_name">상영관<input id="room_name" name="room_name" type="text"></label>
                </form>
                <div class="btn_area">
                    <button id="roomOk_btn">등록</button>
                    <button id="roomCancle_btn">취소</button>
                </div>
            </div>
            <div class="theater_room_alter">
                <h2>등록된 지점 / 상영관 관리</h2>
                <div class="theater_room_list_area">
                    <div class="theater_list">
                        <ul>
                            <li>
                                <span>강북점</span>
                                <div class="alter_icon">
                                    <i class="far fa-edit" id="theater_editbtn_icon"></i>
                                    <i class="far fa-trash-alt" id="theater_deletebtn_icon"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="room_list">
                        <ul>
                            <li>
                                <span>A관</span>
                                <div class="alter_icon">
                                    <i class="far fa-edit" id="room_editbtn_icon"></i>
                                    <i class="far fa-trash-alt" id="room_deletebtn_icon"></i>
                                </div>
                            </li>
                            <li>
                                <span>B관</span>
                                <div class="alter_icon">
                                    <i class="far fa-edit" id="room_editbtn_icon"></i>
                                    <i class="far fa-trash-alt" id="room_deletebtn_icon"></i>
                                </div>
                            </li>
                            <li>
                                <span>C관</span>
                                <div class="alter_icon">
                                    <i class="far fa-edit" id="room_editbtn_icon"></i>
                                    <i class="far fa-trash-alt" id="room_deletebtn_icon"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="seatform_area">
            <h2>좌석 등록</h2>
            <div class="seat_register">
                <div class="seat_wrap">
                    <div class="screen">

                    </div>
                    <div class="seats">

                    </div>
                </div>
                <div class="seat_btn">
                    <button type="button">등록</button>
                    <button type="button">취소</button>
                </div>
            </div>
        </div>
    </div>
</div>

<%@include file="../layout/footer.jsp" %>

<script src="/resources/js/jquery-3.3.1.min.js" type="text/javascript"></script>
<script src="/resources/js/theater_register.js" type="text/javascript"></script>
<script>
    let line = '';
    let seat = '';
    let screen = '<p>Screen</p>';
    let seats = $(".seats");
    let alphabet = ["a","b","c","d","e","f","g","h","i","j"];

    $(".screen").find('p').remove();
    $(".screen").append(screen);

    for (let i = 0; i < 10; i++) {
        line = '<div class="line"></div>';
        seats.append(line);
        for (let j = 0; j < 10; j++) {
            if (j === 2 || j === 7) {
                seat = '<div class="seat_space">';
            } else {
                seat = '<input type="button" name="seat" id="seat" value="'+alphabet[i]+(j+1)+'">';
            }
            seats.append(seat);

        }
        // seat_wrap.find('input').remove();
    }

    // 버튼 클릭시 색상 변경
    $('#seat').on('click', function () {
        let seat = $(this);
        seat.toggleClass("seat_click");



    })
</script>
</body>
</html>
