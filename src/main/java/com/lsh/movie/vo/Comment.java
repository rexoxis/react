package com.lsh.movie.vo;

public class Comment {
    private int comment_no;
    private String userid;
    private String movie_title;
    private String content;
    private int score;
    private String regdate;
    private int movie_no;

    public int getMovie_no() {
        return movie_no;
    }

    public void setMovie_no(int movie_no) {
        this.movie_no = movie_no;
    }

    public String getRegdate() {
        return regdate;
    }

    public void setRegdate(String regdate) {
        this.regdate = regdate;
    }

    public int getComment_no() {
        return comment_no;
    }

    public void setComment_no(int comment_no) {
        this.comment_no = comment_no;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getMovie_title() {
        return movie_title;
    }

    public void setMovie_title(String movie_title) {
        this.movie_title = movie_title;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
