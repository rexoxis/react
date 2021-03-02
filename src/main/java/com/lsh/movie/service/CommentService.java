package com.lsh.movie.service;


import com.lsh.movie.dao.CommentMapper;
import com.lsh.movie.utils.PageMaker;
import com.lsh.movie.vo.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentMapper commentMapper;

    public List<Comment> selectComment(PageMaker pageMaker) {
        return commentMapper.selectComment(pageMaker);
    }

    public int countComment(int movie_no) {
        return commentMapper.countComment(movie_no);
    }

    public int insertComment(Comment comment) {
        return commentMapper.insertComment(comment);
    }
}
