package com.lsh.movie.vo;

public class Seats {
    private int seat_no;
    private String seat_name;
    private int seat_check;
    private int reserve_check;
    private int room_no;

    public int getReserve_check() {
        return reserve_check;
    }

    public void setReserve_check(int reserve_check) {
        this.reserve_check = reserve_check;
    }

    public int getRoom_no() {
        return room_no;
    }

    public void setRoom_no(int room_no) {
        this.room_no = room_no;
    }

    public int getSeat_no() {
        return seat_no;
    }

    public void setSeat_no(int seat_no) {
        this.seat_no = seat_no;
    }

    public String getSeat_name() {
        return seat_name;
    }

    public void setSeat_name(String seat_name) {
        this.seat_name = seat_name;
    }

    public int getSeat_check() {
        return seat_check;
    }

    public void setSeat_check(int seat_check) {
        this.seat_check = seat_check;
    }

}
