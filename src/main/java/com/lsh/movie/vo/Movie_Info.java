package com.lsh.movie.vo;

public class Movie_Info {

    private String movie_no; // 영화 고유번호
    private String title; // 영화제목
    private String summary; // 줄거리
    private String director; // 감독
    private String actor; // 배우
    private String genre; // 장르
    private String running_time; // 상영시간
    private String opening_date; // 개봉일
    private String poster; // 영화 포스터
    private int opencheck; // 개봉,개봉예정작 구분

    public String getMovie_no() {
        return movie_no;
    }

    public void setMovie_no(String movie_no) {
        this.movie_no = movie_no;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getActor() {
        return actor;
    }

    public void setActor(String actor) {
        this.actor = actor;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getRunning_time() {
        return running_time;
    }

    public void setRunning_time(String running_time) {
        this.running_time = running_time;
    }

    public String getOpening_date() {
        return opening_date;
    }

    public void setOpening_date(String opening_date) {
        this.opening_date = opening_date;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public int getOpencheck() {
        return opencheck;
    }

    public void setOpencheck(int opencheck) {
        this.opencheck = opencheck;
    }
}
