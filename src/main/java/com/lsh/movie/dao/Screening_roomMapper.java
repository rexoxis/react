package com.lsh.movie.dao;

import com.lsh.movie.vo.Screening_room;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Screening_roomMapper {

    public List<Screening_room> selectRoom(int theater_no);
}
