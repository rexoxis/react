package com.lsh.movie.dao;

import com.lsh.movie.utils.PageMaker;
import com.lsh.movie.vo.Comment;
import com.lsh.movie.vo.Movie_Info;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Movie_infoMapper {

    public List<Movie_Info> selectAllList();

    public List<Movie_Info> selectPageList(PageMaker pageMaker);

    public int countList(int opencheck);

    public Movie_Info selectOneList(int movie_no);

    public int insertMovie(Movie_Info movie_info);

    public int modifyMovie(Movie_Info movie_info);

    public int deleteMovie(int movie_no);

}
