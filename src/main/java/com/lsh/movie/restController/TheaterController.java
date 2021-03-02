package com.lsh.movie.restController;


import com.lsh.movie.service.TheaterService;
import com.lsh.movie.vo.Theater;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class TheaterController {
    @Autowired
    TheaterService theaterService;

    @RequestMapping(value = "/theaters", method = RequestMethod.GET)
    public JSONObject allShowingMovie() {
        List<Theater> theaterList = theaterService.selectAllList();

        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("theaterList", theaterList);

        return new JSONObject(hashMap);
    }
}
