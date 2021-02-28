package com.lsh.movie.restController;

import com.lsh.movie.service.MemberService;
import com.lsh.movie.vo.Members;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MemberRestController {

    @Autowired
    MemberService service;

    @RequestMapping("/members")
    public List<Members> allMembers() {
        return service.getAllMembers();
    }
}
