$('document').ready(function () {
    let movie_no = 0; // 처음 접속했을때

    loadMovieData();
    groupByName(movie_no);
});

// 처음 들어왔을 경우에 상영중인 영화 출력
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

function drawMovieInfo(data) {
    let movieList = data.movieList;
    let html = '';

    for (let i = 0; i < movieList.length; i++) {
        html += '<li><button type=\"button\" class="movieTitle_btn">'+movieList[i].title+'</button>' +
                '<input type="hidden" class="movie_no" value="'+movieList[i].movie_no+'">'+
                '</li>';

        $(".movie_select ul").find('li').remove();
        $(".movie_select ul").append(html);
    }

    $(".movie_select ul li").on("click",".movieTitle_btn", function () {
        let btn = $(this);
        let li = btn.parent();
        let movie_no = li.find('.movie_no').val();
        let movie_title = li.find('button').text();
        // 선택한 영화 보여주기
        $(".selected_movie_area span").text(movie_title);

        console.log("클릭한 movie_no : " + movie_no);
        groupByName(movie_no);
    });
}


// 처음 들어왔을때 전체 영화관별 등록된 영화 수를 보여줌
function groupByName(movie_no) {
    let url = "/theaters/count";
    if (movie_no !== 0) {
        url = "/theaters/count/"+movie_no;
    }
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json"
    }).done(function (data) {
        console.log(data);
        drawTheaterList(data, movie_no);
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    });

}

// 등록된 상영관 그리기
function drawTheaterList(data,movie_no) {
    let groupByName = data.groupByName;
    let html = '';

    if (groupByName.length === 0) {
        $(".theater_select ul li").remove();
        $(".select_list ul").find('li').remove();
    } else {

        for (let i = 0; i < groupByName.length; i++) {
            html += '<li><button type="button" class="theater_name">'+groupByName[i].theater_name+'</button>' +
                '<span>('+groupByName[i].countName+')</span>'+
                '<input type="hidden" class="selected_movie_no" id="movie_no" value="'+movie_no+'">'+
                '</li>';

            $(".theater_select ul").find('li').remove();
            $(".theater_select ul").append(html);
        }
    }

    // 영화관 클릭시 해당 영화+영화관의 등록된 영화들 보여줌
    $(".theater_select ul li").on("click", ".theater_name", selectShowingMovies);
}

function selectShowingMovies() {
    let btn = $(this);
    let li = btn.parent();
    let movie_no = li.find('input').val();
    let name = li.find('button').text();

    // 선택한 영화관 보여주기
    $(".selected_theater_area span").text(name);
    console.log("영화관 선택시 넘어온 movie_no : " + movie_no);
    console.log("선택한 영화관  : " + name);

    $.ajax({
        url: "/theaters/movie/"+movie_no +"/"+name,
        type: "GET",
        dataType: "json"
    }).done(function (data) {
        console.log(data);
        drawShowingMovies(data);
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    });
}


function drawShowingMovies(data) {
    let showMovies = data.showMovies;
    let html = '';
    console.log("showMovies : " + showMovies);

    if (showMovies.length===0) {
        $(".select_list ul").find('li').remove();
    } else {
        for (let i = 0; i < showMovies.length; i++) {
            html += '<li>'+
                       '<div class="result">'+
                           '<span>'+showMovies[i].show_time.substr(0,5)+'</span>&nbsp|&nbsp'+
                           '<span>'+showMovies[i].movie_title+'</span>'+
                           '<input type="hidden" class="selected_movie_no" id="movie_no" value="'+showMovies[i].movie_no+'">'+
                           '<input type="hidden" class="selected_theater_name" id="name" value="'+showMovies[i].name+'">'+
                           '<input type="hidden" class="selected_showing_no" id="showing_no" value="'+showMovies[i].showing_info_no+'">'+
                       '</div>'+
                    '</li>';
            $(".select_list ul").find('li').remove();
            $(".select_list ul").append(html);
        }
    }

    // 선택한 시간, 영화 보여줌
    $(".select_list ul li .result").on("click", "span", function () {
        let btn = $(this);
        let li = btn.parent().parent();
        let time = li.find('span').text().substr(0,5);
        // let title = li.find('span').text().substr(5,8);
        // console.log("time : " + time);
        // console.log("title : " + title);
        $(".selected_time_area span").text(time);
        let showing_no = li.find('.selected_showing_no').val();
        console.log("시간선택했을때 showing_no : " + showing_no);
        // 상영관 좌석표 그리기 / seats.js 참고
        drawSeats(showing_no);
    });
}


// 리셋 버튼
$("#reset_btn").on("click", function () {
    $(".theater_select ul").find('li').remove();
    $(".select_list ul").find('li').remove();
    $(".seats").children().remove();
    // $(".seats").find('div').remove();
    $(".selected_time_area span").text("");
    $(".selected_theater_area span").text("");
    $(".selected_movie_area span").text("");
});
