function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var movie_no = getParameterByName("no");
var currentPage = getParameterByName("cpage");

var comment_cpage = getParameterByName("comtcpage");

if (comment_cpage == "") {
    comment_cpage = 1;
}
$('document').ready(function () {
    loadData(movie_no);
    loadComment(comment_cpage);

});

// 영화 상세정보 조회
function loadData(movie_no) {
    $.ajax({
        url: "/movies/detail/"+movie_no,
        type: "GET",
        dataType: "json"
    }).done(function (data) {
        // console.log(data);
        setMovieDetail(data);
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    });
}

// 영화 상세 데이터 셋팅
function setMovieDetail(data) {
    let movie_info = data.movie_info;
    let localURL = "/resources/img/";
    let html = '';

    $('.title').text(movie_info.title);
    $('.genre').text('장르 : '+movie_info.genre);
    $('.director').text('감독 : '+movie_info.director);
    $('.actor').text('출연배우 : '+movie_info.actor);
    $('.running_time').text('상영시간 : '+movie_info.running_time);
    $('.opening_date').text('개봉일 : '+movie_info.opening_date);
    $('#movie_summary').text(movie_info.summary);

    html += '<a href="#">' +
            '<img src="'+localURL+movie_info.poster+'" alt="POSTER"></a>'+
            '<button type="button">예매하기</button>'
    $('.movie_info_img').find('a, button').remove();
    $('.movie_info_img').append(html);
}

// 후기 댓글 조회
function loadComment(comment_cpage) {
    $.ajax({
        url: "/comments/"+movie_no +"/"+comment_cpage,
        type: "GET",
        dataType: "json"
    }).done(function (data) {
        // console.log(data);
        setComment(data);
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    });
}

function setComment(data) {

    var pageMaker = data.pageMaker;
    var currentPage = pageMaker.currentPage;
    var startPage = pageMaker.startPage;
    var endPage = pageMaker.endPage;
    var totalPage = pageMaker.totalPage;

    var commentList = data.commentList;

    var html = '';

    for (var i = 0; i < commentList.length; i++){
        var date = commentList[i].regdate.substr(0,10);
        var time = commentList[i].regdate.substr(11,8);
        html += '<li id="commentList"><div class="user_id">' + commentList[i].userid + '</div>'+
            '<div class="user_score">' + commentList[i].score +'</div>'+
            '<div class="user_comment"><p>' + commentList[i].content + '</p></div>'+
            '<div class="regdate">' + date + ' | ' + time + '</div></li>';
    }

    $('#output_comment').find('li#commentList').remove();
    $('#output_comment').append(html);

    drawPagination(currentPage, startPage, endPage, totalPage)
}

// 페이지네이션
function drawPagination(currentPage, startPage, endPage, totalPage) {
    var prev = '';
    var page = '';
    var next = '';

    // 이전버튼
    if(currentPage > 5) {
        prev +='<li><span><a href="javascript:" id="' + (startPage-1) + '">이전</a></span></li>';
    }

    // 1,2,3,4,5.. 페이지 버튼
    for(var i = startPage; i <= endPage; i++) {
        if(currentPage == i) {
            page += '<li><span><a style="color: red">'+i+'</a></span></li>';
        } else {
            page += '<li><span><a href="javascript:" id="'+i+'">'+ i + '</a></span></li>';
        }
    }

    // 다음버튼
    if(endPage < totalPage) {
        next += '<li><span><a href="javascript:" id="' + (endPage+1) + '">다음</a></span></li>';
    }
    $('#pagination').find('li').remove();
    $('#pagination').append(prev).append(page).append(next);


    $('#pagination a').click(function () {
        var selectPage = $(this).attr("id");

        // console.log('selectPage : ' + selectPage);
        this.currentPage = selectPage;
        loadComment(selectPage);
    });
}

// 페이지 새로고침
function reloadComment(){
    $("#comment_view").load(window.location.href + "#comment_view");
}
// 후기 등록
$('#okbtn').click(function () {
    var inputdata = {
        userid : $('#userid').text(),
        content : $('#content').val(),
        score : $('#score').text(),
        movie_no : movie_no
    };

    // console.log("입력한 데이터 userid : " + inputdata.userid);
    // console.log("입력한 데이터 content : " + inputdata.content);
    // console.log("입력한 데이터 score : " + inputdata.score);
    // console.log("입력한 데이터 movie_no : " + inputdata.movie_no);

    $.ajax({
        url: "/comment",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(inputdata)
    }).done(function (data) {
        if (data == "success") {
            alert("등록완료");
            $('#content').val('');
            loadComment(comment_cpage);
        } else {
            alert("실패");
        }
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    })
})