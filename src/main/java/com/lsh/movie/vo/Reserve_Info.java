package com.lsh.movie.vo;

public class Reserve_Info {

    private String ticket_no; // 티켓번호
    private String movie_title; // 영화제목
    private String theater_name; // 극장
    private String selected_time; // 선택한 상영시간
    private String selected_date; // 선택한 상영날짜
    private String selected_seat; // 선택한 좌석
    private String member_id; // 예매한 회원 아이디
    private String pay; // 결제할 금액

    public String getTicket_no() {
        return ticket_no;
    }

    public void setTicket_no(String ticket_no) {
        this.ticket_no = ticket_no;
    }

    public String getMovie_title() {
        return movie_title;
    }

    public void setMovie_title(String movie_title) {
        this.movie_title = movie_title;
    }

    public String getTheater_name() {
        return theater_name;
    }

    public void setTheater_name(String theater_name) {
        this.theater_name = theater_name;
    }

    public String getSelected_time() {
        return selected_time;
    }

    public void setSelected_time(String selected_time) {
        this.selected_time = selected_time;
    }

    public String getSelected_date() {
        return selected_date;
    }

    public void setSelected_date(String selected_date) {
        this.selected_date = selected_date;
    }

    public String getSelected_seat() {
        return selected_seat;
    }

    public void setSelected_seat(String selected_seat) {
        this.selected_seat = selected_seat;
    }

    public String getMember_id() {
        return member_id;
    }

    public void setMember_id(String member_id) {
        this.member_id = member_id;
    }

    public String getPay() {
        return pay;
    }

    public void setPay(String pay) {
        this.pay = pay;
    }
}
