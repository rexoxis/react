package com.lsh.movie.service;

import com.lsh.movie.dao.TheaterMapper;

import com.lsh.movie.vo.Theater;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheaterService {
    @Autowired
    TheaterMapper theaterMapper;

    public List<Theater> selectAllList() {
        return theaterMapper.selectAllList();
    }
}


