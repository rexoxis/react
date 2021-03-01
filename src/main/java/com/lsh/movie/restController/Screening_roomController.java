package com.lsh.movie.restController;

import com.lsh.movie.service.Screening_roomService;
import com.lsh.movie.vo.Screening_room;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class Screening_roomController {
    @Autowired
    Screening_roomService screening_roomService;

    @RequestMapping(value = "/screening-room/{theater_no}", method = RequestMethod.GET)
    public JSONObject selectRoom(@PathVariable int theater_no) {

        List<Screening_room> roomList = screening_roomService.selectRoom(theater_no);

        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("roomList", roomList);

        return new JSONObject(hashMap);
    }
}
