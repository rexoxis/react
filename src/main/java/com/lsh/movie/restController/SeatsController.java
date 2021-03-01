package com.lsh.movie.restController;


import com.lsh.movie.service.SeatsService;
import com.lsh.movie.vo.Seats;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class SeatsController {

    @Autowired
    SeatsService seatsService;


    // 상영정보에 해당하는 좌석 조회
    @RequestMapping(value = "/seats/{showing_no}", method = RequestMethod.GET)
    public JSONObject selectSeats(@PathVariable int showing_no) {

        int countSeats = seatsService.countSeats(showing_no);

        List<Seats> seatList = seatsService.selectSeats(showing_no);

        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("countSeats", countSeats);
        hashMap.put("seatList", seatList);

        return new JSONObject(hashMap);
    }

    // 좌석 클릭시 좌석 상태 변경


}
