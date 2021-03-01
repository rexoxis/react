package com.lsh.movie.service;

import com.lsh.movie.dao.ReserveMapper;

import com.lsh.movie.vo.Showing_Info;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReserveService {
    @Autowired
    private ReserveMapper reserveMapper;

    public List<Showing_Info> countAllGroupByName() {
        return reserveMapper.countGroupByName();
    }

    public List<Showing_Info> countGroupByName(int movie_no) {
        return reserveMapper.countGroupByName(movie_no);
    }

    public List<Showing_Info> selectShowingMovies(Showing_Info showing_info) {
        return reserveMapper.selectShowingMovies(showing_info);
    }
}
