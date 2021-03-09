function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// detail 페이지에서 넘어온 currentPage값 위해 전역변수로 설정
let currentPage = getParameterByName("cpage");
// console.log("currentPage : " + currentPage);

$('document').ready(function () {
    if (currentPage == "") {
        currentPage = 1;
    }
    loadData(currentPage);
});

function loadData(currentPage) {
    $.ajax({
        url: "/movies/"+currentPage,
        type: "GET",
        dataType: "json"
    }).done(function (data) {
        // console.log(data);
        drawMovieInfo(data);
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    });
}

function drawMovieInfo(data) {
    let pageMaker = data.pageMaker
    let currentPage = pageMaker.currentPage;
    let startPage = pageMaker.startPage;
    let endPage = pageMaker.endPage;
    let totalPage = pageMaker.totalPage;

    let movieList = data.movieList;
    let localURL = "/resources/img/";
    let html = '';

    for (let i = 0; i < movieList.length; i++){
    // console.log("포스터 명 : " + movieList[i].poster);
        html +='<div class="movie">'+
            '<a href="/movie/movie_detail?no='+movieList[i].movie_no+'&cpage=' + currentPage+'">' +
            '<img src="'+localURL+movieList[i].poster+'" alt="POSTER"></a>'+
            '<div class="movie_info">'+
            '<span class="movie_title"><a href="/movie/movie_detail?no='+movieList[i].movie_no+'&cpage=' + currentPage + '">'+movieList[i].title+'</a></span>'+
            '<span><a href="/movie/movie_detail?no='+movieList[i].movie_no+'&cpage=' + currentPage + '">'+movieList[i].opening_date+'</a></span>'+
            '<button type="button"><a href="#">예매하기</a></button>'+'</div></div>';
    }

    $('#movie_wrap').find('.movie').remove();
    $('#movie_wrap').append(html);

    drawPagination(currentPage, startPage, endPage, totalPage)
}

// 페이지네이션
function drawPagination(currentPage, startPage, endPage, totalPage) {
    let prev = '';
    let page = '';
    let next = '';

    // 이전버튼
    if(currentPage > 5) {
        prev +='<li><span><a href="javascript:" id="' + (startPage-1) + '">이전</a></span></li>';
    }

    // 1,2,3,4,5.. 페이지 버튼
    for(let i = startPage; i <= endPage; i++) {
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
        let selectPage = $(this).attr("id");

        console.log('selectPage : ' + selectPage);
        this.currentPage = selectPage;
        loadData(selectPage);
    });
}