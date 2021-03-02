package com.lsh.movie.dao;

import com.lsh.movie.utils.PageMaker;
import com.lsh.movie.vo.Comment;
import org.apache.ibatis.annotations.Mapper;


import java.util.List;

@Mapper
public interface CommentMapper {

    public List<Comment> selectComment(PageMaker pageMaker);

    public int countComment(int movie_no);

    public int insertComment(Comment comment);

}
