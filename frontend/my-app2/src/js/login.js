$('#loginSubmit').click(function () {
    var loginData = {userid: $('#loginUserid').val(), passwd: $('#loginPasswd').val()}
    $.ajax({
        url: "/login",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(loginData)
    }).done(function (data) {
        if (data === "fail") {
            alert("아이디 또는 비밀번호를 확인해 주세요.")
        } else {
            window.location.href = "/";
        }
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        switch (xhr.status) {
            case 400:
                alert("400 error : 잘못된 요청입니다.");
                break;
            case 404:
                alert("404 error : 요청하신 페이지를 찾을 수 없습니다.");
                break;
            case 500:
                alert("500 error : 서버로부터 응답이 없습니다.");
                break;
        }
    });
});

$('#loginCancle').click(function () {
    window.location.href = "/";
});