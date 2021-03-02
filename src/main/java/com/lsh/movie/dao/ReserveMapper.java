package com.lsh.movie.dao;

import com.lsh.movie.vo.Showing_Info;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReserveMapper {

    public List<Showing_Info> countGroupByName();

    public List<Showing_Info> countGroupByName(int movie_no);

    public List<Showing_Info> selectShowingMovies(Showing_Info showing_info);
}
