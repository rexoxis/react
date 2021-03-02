package com.lsh.movie.dao;


import com.lsh.movie.vo.Member;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface MemberMapper {
/*
    public List<Member> getAllMembers();
*/
    public int insertMember(Member member);

    public String checkID(HashMap<String, String> loginData);

}
