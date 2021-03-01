package com.lsh.movie.restController;


import com.lsh.movie.service.Showing_InfoService;
import com.lsh.movie.vo.Showing_Info;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;


@RestController
public class Showing_InfoController {

    @Autowired
    private Showing_InfoService showing_infoService;

    // 상영정보 등록
    @RequestMapping(value = "/showing-info", method = RequestMethod.POST)
    public String showing_info(@RequestBody Showing_Info showing_info) {
        String msg = "showing_Info fail";

        System.out.println("name : " + showing_info.getTheater_no());
        System.out.println("movie_no : " + showing_info.getMovie_no());

        int check = showing_infoService.insertShowing_Info(showing_info);

        if (check >= 1) msg = "showing_Info success";

        return msg;
    }

    // 상영정보 전체 정보 조회
    @RequestMapping(value = "/showing-info", method = RequestMethod.GET)
    public JSONObject allShowingMovie() {
        List<Showing_Info> Showing_InfoList = showing_infoService.selectAllList();

        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("showing_InfoList", Showing_InfoList);

        return new JSONObject(hashMap);
    }

    // 상영정보 수정
    @RequestMapping(value = "/showing-info", method = RequestMethod.PUT)
    public String modifyShowing_info(@RequestBody Showing_Info showing_info) {
        String msg = "showing_info fail";

        System.out.println("name : " + showing_info.getTheater_name());
        System.out.println("movie_no : " + showing_info.getMovie_no());
        System.out.println("theater_no : " + showing_info.getTheater_no());
        System.out.println("showing_info_no : " + showing_info.getShowing_info_no());

        int check = showing_infoService.modifyShowing_Info(showing_info);

        if (check >= 1) msg = "showing_info success";

        return msg;
    }

    // 상영 정보 삭제
    @RequestMapping(value = "/showing-info/{showing_info_no}", method = RequestMethod.DELETE)
    public String deleteShowing_info(@PathVariable int showing_info_no) {
        String msg = "showing_info fail";

        System.out.println("theater_no : " + showing_info_no);

        int check = showing_infoService.deleteShowing_info(showing_info_no);

        if (check >= 1) msg = "showing_info success";

        return msg;
    }


}
