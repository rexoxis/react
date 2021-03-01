package com.lsh.movie.service;

import com.lsh.movie.dao.MemberMapper;
import com.lsh.movie.vo.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class MemberService {

    @Autowired
    private MemberMapper memberMapper;
/*
    public List<Member> getAllMembers() {
        return memberMapper.getAllMembers();
    }*/

    public int insertMember(Member member) {
        return memberMapper.insertMember(member);
    }

    public String checkID(HashMap<String, String> loginData) {
        return memberMapper.checkID(loginData);
    }

}
