package com.lsh.movie.dao;

import com.lsh.movie.vo.Members;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberMapper {

    List<Members> getAllMembers();

}
