package com.lsh.movie.dao;

import com.lsh.movie.vo.Seats;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SeatsMapper {

    public int countSeats(int showing_no);

    public List<Seats> selectSeats(int showing_no);
}
