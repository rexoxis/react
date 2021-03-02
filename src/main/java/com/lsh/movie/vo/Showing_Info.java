package com.lsh.movie.vo;

public class Showing_Info {
    private int showing_info_no;
    private String show_time;
    private String show_date;
    private int movie_no;
    private int theater_no;
    private int room_no;
    private String countName; // 이름별로 카운트
    private String theater_name; // 상영관 이름
    private String movie_title; // 영화 제목

    public int getRoom_no() {
        return room_no;
    }

    public void setRoom_no(int room_no) {
        this.room_no = room_no;
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

    public String getCountName() {
        return countName;
    }

    public void setCountName(String countName) {
        this.countName = countName;
    }

    public int getShowing_info_no() {
        return showing_info_no;
    }

    public void setShowing_info_no(int showing_info_no) {
        this.showing_info_no = showing_info_no;
    }

    public String getShow_time() {
        return show_time;
    }

    public void setShow_time(String show_time) {
        this.show_time = show_time;
    }

    public String getShow_date() {
        return show_date;
    }

    public void setShow_date(String show_date) {
        this.show_date = show_date;
    }

    public int getMovie_no() {
        return movie_no;
    }

    public void setMovie_no(int movie_no) {
        this.movie_no = movie_no;
    }

    public int getTheater_no() {
        return theater_no;
    }

    public void setTheater_no(int theater_no) {
        this.theater_no = theater_no;
    }
}
