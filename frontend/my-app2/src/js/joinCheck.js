function joinfrmcheck() {
    var name = $('#name').val();
    var email1 = $('#email1').val();
    var email2 = $('#email2').val();
    var tel1 = $('#hp1').val();
    var tel2 = $('#hp2').val();
    var tel3 = $('#hp3').val();
    var zipcode = $('#zipcode').val();
    var addr1 = $('#addr1').val();
    var addr2 = $('#addr2').val();

    var addr =  addr1+addr2;
    var email = email1 + '@' + email2;
    var phone = tel1 + tel2 + tel3;

    if (name == "") {
        alert("이름을 입력하세요.");

    } else if ($('#passwd').val() == "") {
        alert("비밀번호를 입력하세요.");

    } else if ($('#repasswd').val() != $('#passwd').val()) {
        alert("비밀번호가 일치하지 않습니다.");

    } else if (zipcode == "") {
        alert("우편번호를 입력 해주세요.");

    } else if (addr1 == "" || addr2 == "") {
        alert("주소를 입력하세요");

    } else if (email1 == "" || email2 == "") {
        alert("이메일 주소를 입력하세요,");

    } else if (tel1 == "" || tel2 == "" || tel3 == "") {
        alert("전화번호를 입력하세요,");

    } else {

        var formdata = {
            name: name,
            userid: $('#userid').val(),
            passwd: $('#passwd').val(),
            zipcode: zipcode,
            addr: addr,
            email: email,
            phone: phone
        };
        console.log('addr : ' + addr);
        console.log('email : ' + email);
        console.log('phone : ' + phone);
        console.log('formdata : ' + formdata);

        $.ajax({
            url: "/members",
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(formdata)
        }).done(function (data) {
            // alert(data);
            if (data == "success") {
                window.location.replace("/join/joinok");
            } else {
                alert("가입 실패");
                window.location.history(-1);
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
        }); // ajax
    } // if
}

$(function() {
    $('#joinokbtn').on('click',joinfrmcheck);
});


// 이메일 입력시 자동입력과 직접입력 방식 선택 구현
$('#sendemail').change(function () {
    $('#sendemail option:selected').each(function () {
        if ($(this).val() == "myemail") {
            $('#email2').val('');
            $('#email2').attr('readonly', false);
        } else {     // 직접입력이 아닐때
            $('#email2').val($(this).text());
            $('#email2').attr('readonly', true);

        }
    })
});

