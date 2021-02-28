package com.lsh.movie.dao;


import com.lsh.movie.vo.Members;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Repository
public class MemberDAO {

    @Autowired
    SqlSessionTemplate sqlSession;

    public int insertMember(Members member) {

//        System.out.println("dao member name : " + member.getName());
//        System.out.println("dao member phone : " + member.getPhone());
//        System.out.println("dao member email : " + member.getEmail());

        return sqlSession.insert("members.insertMember", member);
    }

    public String selectLogin(HashMap<String, String> loginData) {
        return sqlSession.selectOne("members.selectLogin",loginData);
    }
}
