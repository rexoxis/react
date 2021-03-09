// 등록된 영화목록, 상영정보 조회 실행
$('document').ready(function () {
    loadMovieData();
    loadShowingData();
    showing_infoOK();
    showing_infoCancle();
});

// 영화등록 버튼 이벤트
$('.movie_btnbox').on('click', '#movie_okbtn', function () {
    let form = $('#movie_form')[0];
    let formData = new FormData(form);
    let extension = $("#file").val().slice($("#file").val().lastIndexOf(".") + 1).toLowerCase();

    if ($("#title").val() === "") {
        alert("제목을 입력하세요.")
    } else if ($("#genre").val() === "") {
        alert("장르를 입력하세요.")
    } else if ($("#director").val() === "") {
        alert("감독을 입력하세요.")
    } else if ($("#actor").val() === "") {
        alert("출연배우를 입력하세요.")
    } else if ($("#running_time").val() === "") {
        alert("상영시간을 입력하세요.(분 단위)")
    } else if ($("#opening_date").val() === "") {
        alert("개봉일을 입력하세요.")
    } else if ($("#summary").val() === "") {
        alert("줄거리를 입력하세요.")
    } else if ($("#file").val() === "") {
        alert("포스터를 등록하세요.")
    } else if (extension !== "gif" && extension !== "jpg" && extension !== "png") {
        alert("이미지 파일만 업로드 가능합니다.")
    } else if (!$("input:checked[Name='opencheck']").is(":checked")) {
        alert("영화 개봉여부를 선택하세요")
    } else {
        $.ajax({
            url: '/movies/info',
            processData: false,
            contentType: false,
            data: formData,
            type: 'POST'
        }).done(function (data) {
            console.log(data)
            form.reset();
            loadMovieData();
        }).fail(function (xhr) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        });
    }
});

// 취소버튼 클릭 이벤트
$(".movie_btnbox").on('click', '#movie_canclebtn', function () {
    $('#movie_form')[0].reset();
    $("#summary").text("");
    $(".movie_btnbox").find("button").remove("#movie_okbtn");
    $(".movie_btnbox").find("button").remove("#movie_editbtn");
    $(".movie_btnbox").prepend("<button type=\"button\" id=\"movie_okbtn\">등록</button>");

});

// 영화목록 조회
function loadMovieData() {
    $.ajax({
        url: "/movies",
        type: "GET",
        dataType: "json"
    }).done(function (data) {
        console.log(data);
        drawMovieInfo(data);
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    });
}

// 영화목록 조회 후 동적으로 그려주기
function drawMovieInfo(data) {

    let movieList = data.movieList;
    let html = '';

    for (let i = 0; i < movieList.length; i++) {
        html += '<li><span>' + movieList[i].title + '</span>' +
            '<div class="del_edit">' +
            '<i class="far fa-edit" id="movie_editbtn_icon"></i>' +
            '<i class="far fa-trash-alt" id="movie_deletebtn_icon"></i>' +
            '<input type="hidden" class="hidden_no" value="' + movieList[i].movie_no + '">' +
            '<input type="hidden" class="hidden_genre" value="' + movieList[i].genre + '">' +
            '<input type="hidden" class="hidden_director" value="' + movieList[i].director + '">' +
            '<input type="hidden" class="hidden_actor" value="' + movieList[i].actor + '">' +
            '<input type="hidden" class="hidden_running_time" value="' + movieList[i].running_time + '">' +
            '<input type="hidden" class="hidden_opening_date" value="' + movieList[i].opening_date + '">' +
            '<input type="hidden" class="hidden_summary" value="' + movieList[i].summary + '">' +
            '</div></li>';
    }

    $('#movie_list ul').find('li').remove();
    $('#movie_list ul').append(html);

    // 영화제목 클릭하면 상영정보등록의 영화명에 영화제목 셋팅
    // this.find()를 이용해 하위요소 탐색
    $("#movie_list ul li span").on("click", function () {
        let title = $(this).text();
        let movie_no = $(this).parent().find('input').val();
        console.log("click title : " + title);
        console.log("click movie_no : " + movie_no);
        $("#movie_title").val(title);
        $("#select_movie_no").val(movie_no);
    });

    // 등록된 영화 수정(아이콘 클릭)시 이벤트
    $("#movie_list ul li div").on("click", "#movie_editbtn_icon", movieEditAction);

    // 등록된 영화 삭제(아이콘 클릭)시 이벤트
    $("#movie_list ul li div").on("click", "#movie_deletebtn_icon", movieDeleteAction);
}

// 등록된 영화 정보 수정
// 영화 등록 form에 영화정보 셋팅, 등록버튼을 수정버튼으로 바꿔줌
function movieEditAction() {
    let btn = $(this);
    let li = btn.parent().parent();
    let movie_no = li.find(".hidden_no").val();

    // console.log("li text 데이터 확인 : " + li.text())
    console.log("선택된 movie_no 확인 : " + movie_no)

    // 영화등록 창에 선택된 값들 셋팅
    $("#title").val(li.find("span").text())
    $("#genre").val(li.find(".hidden_genre").val())
    $("#director").val(li.find(".hidden_director").val())
    $("#actor").val(li.find(".hidden_actor").val())
    $("#running_time").val(li.find(".hidden_running_time").val())
    $("#opening_date").val(li.find(".hidden_opening_date").val())
    $("#summary").text(li.find(".hidden_summary").val())
    $("#select_movieInfo_no").val(movie_no);

    // 등록버튼 수정버튼으로 바꿈
    $(".movie_btnbox").find("button").remove("#movie_okbtn");
    $(".movie_btnbox").find("button").remove("#movie_editbtn");
    $(".movie_btnbox").prepend("<button type=\"button\" id=\"movie_editbtn\">수정</button>");

    // 바꾼 수정버튼 클릭시 이벤트
    $("#movie_editbtn").on("click", function () {
        let form = $('#movie_form')[0];
        let formData = new FormData(form);
        let extension = $("#file").val().slice($("#file").val().lastIndexOf(".") + 1).toLowerCase();

        if ($("#title").val() === "") {
            alert("제목을 입력하세요.")
        } else if ($("#genre").val() === "") {
            alert("장르를 입력하세요.")
        } else if ($("#director").val() === "") {
            alert("감독을 입력하세요.")
        } else if ($("#actor").val() === "") {
            alert("출연배우를 입력하세요.")
        } else if ($("#running_time").val() === "") {
            alert("상영시간을 입력하세요.(분 단위)")
        } else if ($("#opening_date").val() === "") {
            alert("개봉일을 입력하세요.")
        } else if ($("#summary").val() === "") {
            alert("줄거리를 입력하세요.")
        } else if ($("#file").val() === "") {
            alert("포스터를 등록하세요.")
        } else if (extension !== "gif" && extension !== "jpg" && extension !== "png") {
            alert("이미지 파일만 업로드 가능합니다.")
        } else if (!$("input:checked[Name='opencheck']").is(":checked")) {
            alert("영화 개봉여부를 선택하세요")
        } else {
            $.ajax({
                url: '/movies/info/movie-no',
                processData: false,
                contentType: false,
                data: formData,
                type: 'POST'
            }).done(function (data) {
                console.log(data)
                form.reset();
                $("#summary").text("");
                $(".movie_btnbox").find("button").remove("#movie_okbtn");
                $(".movie_btnbox").find("button").remove("#movie_editbtn");
                $(".movie_btnbox").prepend("<button type=\"button\" id=\"movie_okbtn\">등록</button>");
                loadMovieData();
            }).fail(function (xhr) {
                console.log(xhr.status);
                console.log(xhr.responseText);
            });
        }
    });
}


// 등록된 영화정보 삭제
function movieDeleteAction() {
    const btn = $(this);
    let li = btn.parent().parent(); // 현재 클릭된 행 (li태그)
    let div = li.children(); // 현재 클릭된 행에서 안에 있는 내용(td)을 의미한다
    let movie_no = div.find(".hidden_no").val();
    console.log("삭제버튼 클릭시 선택된 movie_no : " + movie_no);

    $.ajax({
        url: "/movies/info/" + movie_no,
        type: "DELETE"
    }).done(function (data) {
        console.log("delete msg : " + data);
        loadMovieData();
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    });
}

// 상영정보 등록
function showing_infoOK() {
    $('.reg_btnbox').on("click", '#showing_okbtn', function () {
        let form = $('#showing_info_form')[0];
        let formData = $('#showing_info_form')[0].serializeObject();

        let theater_no = $("#select_theater_name option:selected").val(); // 선택한 지점명의 번호
        let room_no = $("#select_seat_name option:selected").val(); // 선택한 상영관

        if ($("#movie_title").val() === "") {
            alert("영화를 선택하세요.");
        } else if (theater_no === "0") {
            alert("지정명을 선택하세요.");
        } else if (room_no === "type") {
            alert("상영관을 선택하세요.");
        } else if ($("#showing_date").val() === "") {
            alert("상영날짜를 입력하세요.");
        } else if ($("#showing_time").val() === "") {
            alert("상영시간을 입력하세요.");
        } else {
            // 상영정보 등록 api
            $.ajax({
                url: '/showing-info',
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(formData)
            }).done(function (data) {
                if (data === "showing_Info success") {
                    loadShowingData(); // 상영정보 데이터 다시 조회
                    form.reset(); // 폼 초기화
                }
            }).fail(function (xhr) {
                console.log(xhr.status);
                console.log(xhr.responseText);
            });
        }
    });
}


// 취소버튼 클릭 이벤트
function showing_infoCancle() {
    $(".reg_btnbox").on('click', '#showing_canclebtn', function () {
        let form = $('#showing_info_form')[0];
        form.reset();
        $(".reg_btnbox").find("button").remove("#showing_okbtn");
        $(".reg_btnbox").find("button").remove("#showing_editbtn");
        $(".reg_btnbox").prepend('<button type="button" id="showing_okbtn">등록</button>');
    });
}

// 상영정보 조회
function loadShowingData() {

    $.ajax({
        url: "/showing-info",
        type: "GET",
        dataType: "json"
    }).done(function (showing_data) {
        console.log(showing_data);
        drawShowingInfo(showing_data);
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    });

    // 지점명 조회
    $.ajax({
        url: "/theaters",
        type: "GET",
        dataType: "json"
    }).done(function (data) {
        console.log(data);
        drawOption(data);
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    });

}

// 지점명 조회후 동적으로 그려주기
function drawOption(data) {
    let theaterList = data.theaterList;
    let option = '<option value="0" selected>지점명 선택</option>';

    for (let i = 0; i < theaterList.length; i++) {
        option += '<option value="' + theaterList[i].theater_no + '">' + theaterList[i].name + '</option>';
    }

    // select 태그에 붙여줌
    $('#select_theater_name').find('option').remove();
    $('#select_theater_name').append(option);

    let option2 = '<option value="type" selected>지점을 선택하세요.</option>';
    $('#select_seat_name').find('option').remove();
    $('#select_seat_name').append(option2);

    // select 태그 클릭시 지점명에 해당하는 상영관 그리기
    $('#select_theater_name').on("change", drawScreeningRoom);

}

// 상영관 그리기
function drawScreeningRoom() {
    let theater_no = $("#select_theater_name option:selected").val(); // 지점명 선택시 지점번호
    console.log("체인지 함수 안에서 지점 번호 : " + theater_no);
    let option = '';
    if (theater_no !== "0") {
        option = '<option value="type" selected>상영관 선택</option>';
    } else {
        option = '<option value="type" selected>지점을 선택하세요.</option>';
    }
    // 상영관 조회
    $.ajax({
        url: "/screening-room/" + theater_no,
        type: "GET",
        dataType: "json"
    }).done(function (data) {
        console.log(data);
        let roomList = data.roomList;

        for (let i = 0; i < roomList.length; i++) {
            option += '<option value="' + roomList[i].room_no + '">' + roomList[i].room_name + '</option>';
        }
        // select 태그에 붙여줌
        $('#select_seat_name').find('option').remove();
        $('#select_seat_name').append(option);
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    });
}

// 상영정보 조회 후 동적으로 그려주기
function drawShowingInfo(data) {
    let showing_InfoList = data.showing_InfoList;
    let html = '';

    for (let i = 0; i < showing_InfoList.length; i++) {
        html += '<tr>' +
            '<td>' + showing_InfoList[i].theater_name + '</td>' +
            '<td>' + showing_InfoList[i].movie_title + '</td>' +
            '<td>' + showing_InfoList[i].show_date + '</td>' +
            '<td>' + showing_InfoList[i].show_time + '</td>' +
            '<td><i class="far fa-edit" id="showing_editbtn_icon"></i>&nbsp;<i class="far fa-trash-alt" id="showing_deletebtn_icon">' +
            '<input type="hidden" id="edit_theater_no" value="' + showing_InfoList[i].theater_no + '">' +
            '<input type="hidden" id="edit_showing_info_no" value="' + showing_InfoList[i].showing_info_no + '">' +
            '</td>' +
            '</tr>';
    }

    $('.table tbody').find('tr').remove();
    $('.table tbody').append(html);

    // 수정버튼(아이콘) 클릭 이벤트
    $(".table tr td #showing_editbtn_icon").on('click', showingEditAction);

    // 삭제버튼(아이콘) 클릭 이벤트
    $(".table tr td #showing_deletebtn_icon").on('click', showingDeleteAction);

}


// form 데이터들을 javascript object로 변환 해주는 함수정의
jQuery.fn.serializeObject = function () {
    let obj = null;
    try {
        if (this[0].tagName && this[0].tagName.toUpperCase() === "FORM") {
            let arr = this.serializeArray();
            if (arr) {
                obj = {};
                jQuery.each(arr, function () {
                    obj[this.name] = this.value;
                });
            }
        }
    } catch (e) {
        alert(e.message);
    } finally {
    }
    return obj;
}

// 등록된 상영정보 수정
// 수정버튼을 클릭하면 이벤트 발생
// 해당 버튼을 btn 변수에 넣고
// 버튼이 td안에 있으므로 parent로 tr을 찾고, 찾은 tr에 children으로 자식요소(td)를 찾아 변수에 담아준다
function showingEditAction() {

    let btn = $(this);
    let tr = btn.parent().parent(); // 현재 클릭된 행(tr)이 된다
    let td = tr.children(); // 현재 클릭된 행에서 안에 있는 내용(td)을 의미한다

    // 상영 정보 등록란에 클릭한 값 셋팅
    $("#movie_title").val(td.eq(1).text());
    $("#select_theater_name").val(td.eq(4).find('#edit_theater_no').val()).prop("selected", true);
    $("#showing_date").val(td.eq(2).text());
    $("#showing_time").val(td.eq(3).text());
    $("#select_showing_info_no").val(td.eq(4).find('#edit_showing_info_no').val());

    $(".reg_btnbox").find("button").remove("#showing_okbtn");
    $(".reg_btnbox").find("button").remove("#showing_editbtn");
    $(".reg_btnbox").prepend("<button type=\"button\" id=\"showing_editbtn\">수정</button>");

    // 바뀐 수정버튼 클릭시 이벤트 발생
    $("#showing_editbtn").on("click", function () {
        // 정의한 함수를 사용해 form 데이터를 object로 변환
        let modifyData = $("#showing_info_form").serializeObject();

        $.ajax({
            url: "/showing-info",
            type: 'PUT',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(modifyData)
        }).done(function (data) {
            console.log(data);
            $('#showing_info_form')[0].reset();
            $(".reg_btnbox").find("button").remove("#showing_okbtn");
            $(".reg_btnbox").find("button").remove("#showing_editbtn");
            $(".reg_btnbox").prepend("<button type=\"button\" id=\"showing_okbtn\">등록</button>");
            loadShowingData();
        }).fail(function (xhr) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        });
    });
}

// 삭제버튼 클릭시 수행할 함수
function showingDeleteAction() {
    const btn = $(this);
    let tr = btn.parent().parent(); // 현재 클릭된 행(tr)이 된다
    let td = tr.children(); // 현재 클릭된 행에서 안에 있는 내용(td)을 의미한다
    let theater_no = td.eq(4).find('input[type="hidden"]').val();
    console.log("삭제버튼 클릭시 선택된 theater_no : " + theater_no);

    $.ajax({
        url: "/showing-info/" + theater_no,
        type: "DELETE"
    }).done(function (data) {
        console.log("delete msg : " + data);
        loadShowingData();
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    });

}
