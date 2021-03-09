function drawSeats(showing_info_no) {
    // 좌석등록
    $.ajax({
        url: '/seats/' + showing_info_no,
        type: 'GET',
        dataType: "json"
    }).done(function (data) {
        console.log(data);
        let countSeat = data.countSeats; // 좌석 총갯수
        let seatList = data.seatList; // 좌석정보
        let line = '';
        let seat = '';
        let screen = '<p>Screen</p>';
        $(".seats").find('p').remove();
        $(".seats").append(screen);

        for (let i = 0; i < seatList.length; i++) {
            let num = Math.ceil(i / 10) * 10;
            seat += '<input type="button" class="seat" value="' + seatList[i].seat_name + '">';
            if (i+1 === num) {
                console.log("기준 : " + num)
                seat += '<div class="line"></div>';
                // $(".seats").find('div').remove();
                // $(".seats").append(line);
            }
            $(".seats").find('input').remove();
            $(".seats").append(seat);

        }

        // for (let i = 0; i < 10; i++) {
        //     line = '<div class="line"></div>';
        //     $(".seats").append(line);
        //     for (let j = 0; j < 10; j++) {
        //         if (j === 2 || j === 7) {
        //             seat = '<div class="seat_space">';
        //         } else {
        //             seat = '<input type="button" class="seat" value="'+alphabet[i]+(j+1)+'">';
        //         }
        //
        //         $(".line").find('input').remove();
        //         $(".seats").append(seat);
        //     }
        // }
    }).fail(function (xhr) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    });


}
