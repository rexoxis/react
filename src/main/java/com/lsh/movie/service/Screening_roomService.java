package com.lsh.movie.service;

import com.lsh.movie.dao.Screening_roomMapper;

import com.lsh.movie.vo.Screening_room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Screening_roomService {
    @Autowired
    Screening_roomMapper screening_roomMapper;

    public List<Screening_room> selectRoom(int theater_no) {
        return screening_roomMapper.selectRoom(theater_no);
    }
}
