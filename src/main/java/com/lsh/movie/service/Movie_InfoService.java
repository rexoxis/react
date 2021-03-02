package com.lsh.movie.service;

import com.lsh.movie.dao.Movie_infoMapper;
import com.lsh.movie.utils.PageMaker;
import com.lsh.movie.vo.Movie_Info;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Movie_InfoService {

    @Autowired
    private Movie_infoMapper movie_infoMapper;

    public List<Movie_Info> selectAllList() {
        return movie_infoMapper.selectAllList();
    }
    public List<Movie_Info> selectPageList(PageMaker pageMaker) {
        return movie_infoMapper.selectPageList(pageMaker);
    }

    public int countList(int opencheck) {
        return movie_infoMapper.countList(opencheck);
    }

    public Movie_Info selectOneList(int movie_no) {
        return movie_infoMapper.selectOneList(movie_no);
    }

    public int insertMovie(Movie_Info movie_info) {
        return movie_infoMapper.insertMovie(movie_info);
    }

    public int modifyMovie(Movie_Info movie_info) {
        return movie_infoMapper.modifyMovie(movie_info);
    }

    public int deleteMovie(int movie_no) {
        return movie_infoMapper.deleteMovie(movie_no);
    }
}
