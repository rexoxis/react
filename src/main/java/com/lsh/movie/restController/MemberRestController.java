package com.lsh.movie.restController;

import com.lsh.movie.service.MemberService;
import com.lsh.movie.vo.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.HashMap;

@RestController
public class MemberRestController {

    @Autowired
    MemberService memberService;
/*
    @RequestMapping("/members")
    public List<Members> allMembers() {
        return service.getAllMembers();
    }
*/

    // 회원가입
    @RequestMapping(value = "/members", method = RequestMethod.POST)
    public String insertMember(@RequestBody HashMap<String, String> joinData){
        String msg = "fail";

//        System.out.println("request params : " + joinData);
//        System.out.println("name : " + joinData.get("name"));

        Member member = new Member();

        member.setName(joinData.get("name"));
        member.setUserid(joinData.get("userid"));
        member.setPasswd(joinData.get("passwd"));
        member.setZipcode(joinData.get("zipcode"));
        member.setAddr(joinData.get("addr"));
        member.setEmail(joinData.get("email"));
        member.setPhone(joinData.get("phone"));

        int check = memberService.insertMember(member);

        if (check > 0) {
            msg = "success";
        }

        return msg;
    }

    // 로그인
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String checkID(@RequestBody HashMap<String, String> loginData, HttpSession session){
        String msg = "fail";

        String resultUserid = memberService.checkID(loginData);

//        System.out.println("resultUserid : " + resultUserid);

        if (resultUserid != null) {
            session.setAttribute("userid", resultUserid);
            msg = "success";
        }

        return msg;
    }

}
