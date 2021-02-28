package com.lsh.movie.service;

import com.lsh.movie.dao.MemberMapper;
import com.lsh.movie.vo.Members;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class MemberService {

    @Autowired
    private MemberMapper memberMapper;

    public List<Members> getAllMembers() {
        return memberMapper.getAllMembers();
    }


}
