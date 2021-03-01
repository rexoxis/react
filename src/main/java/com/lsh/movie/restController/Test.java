package com.lsh.movie.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class Test {
    @Autowired

    @RequestMapping("/calendar")
    public String calTest(){
        return "calendarTest";
    }

    // 테스트
    @RequestMapping("/test")
    public String test(){
        return "test";
    }


}
