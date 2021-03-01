package com.lsh.movie.service;

import com.lsh.movie.dao.SeatsMapper;

import com.lsh.movie.vo.Seats;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatsService {

    @Autowired
    SeatsMapper seatsMapper;

    public int countSeats(int showing_no) {
        return seatsMapper.countSeats(showing_no);
    }

    public List<Seats> selectSeats(int showing_no) {
        return seatsMapper.selectSeats(showing_no);
    }


}
