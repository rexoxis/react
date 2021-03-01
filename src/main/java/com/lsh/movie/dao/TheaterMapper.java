package com.lsh.movie.dao;

import com.lsh.movie.vo.Theater;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TheaterMapper {

    public List<Theater> selectAllList();
}
