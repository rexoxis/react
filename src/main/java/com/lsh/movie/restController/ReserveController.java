package com.lsh.movie.restController;

import com.lsh.movie.service.ReserveService;
import com.lsh.movie.vo.Showing_Info;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class ReserveController {

    @Autowired
    private ReserveService reserveService;

    // 상영중인 영화 목록 날짜로 조회 (기본상태)
    @RequestMapping(value = "/movies/date", method = RequestMethod.GET)
    public JSONObject allMovieList() {

//        List<Movie_Info> movie_infoList = reserveService.selectAllList();

        HashMap<String, Object> hashMap = new HashMap<>();
//        hashMap.put("movieList", movie_infoList);

        return new JSONObject(hashMap);
    }

    // 전체 상영관별로 등록 되어있는 영화 수
    @RequestMapping(value = "/theaters/count", method = RequestMethod.GET)
    public JSONObject allGroupByName() {
        List<Showing_Info> groupByName = reserveService.countAllGroupByName();
//        System.out.println(groupByName.get(1).getCountName());

        HashMap<String, Object> hashMap = new HashMap<>();

        hashMap.put("groupByName", groupByName);

        return new JSONObject(hashMap);
    }

    // 전체 상영관별로 등록 되어있는 영화 수
    @RequestMapping(value = "/theaters/count/{movie_no}", method = RequestMethod.GET)
    public JSONObject groupByName(@PathVariable int movie_no) {
        List<Showing_Info> groupByName = reserveService.countGroupByName(movie_no);
        System.out.println("넘어온 movie_no : " + movie_no);

        HashMap<String, Object> hashMap = new HashMap<>();

        hashMap.put("groupByName", groupByName);

        return new JSONObject(hashMap);
    }

    // 선택한 영화와 상영관에서 시간대별로 모든 영화 목록 조회 (영화번호, 상영관 번호)
    @RequestMapping(value = "/theaters/movie/{movie_no}/{theater_name}", method = RequestMethod.GET)
    public JSONObject showingMovies(Showing_Info showing_info) {
        List<Showing_Info> showMovies = reserveService.selectShowingMovies(showing_info);
        System.out.println("넘어온 영화 번호 : " + showing_info.getMovie_no());
        System.out.println("넘어온 상영관 이름 : " + showing_info.getTheater_name());

//        System.out.println("조회된 상영날짜 : "+showMovies.get(0).getShow_date());
//        System.out.println("조회된 영화제목 : "+showMovies.get(0).getMovie_title());

        HashMap<String, Object> hashMap = new HashMap<>();

        hashMap.put("showMovies", showMovies);

        return new JSONObject(hashMap);
    }

//    // 상영관만 선택했을때 해당 상영관에 모든 영화목록 조회
//    @RequestMapping(value = "/theaters/movie/{name}", method = RequestMethod.GET)
//    public JSONObject selectTheater(Theater theater) {
//        List<Theater> showAllMovies = reserveService.selectShowMovies(theater);
////        System.out.println("넘어온 극장명 : " + theater.getName());
////        System.out.println("상영날짜 : "+showAllMovies.get(0).getShow_date());
////        System.out.println("영화제목 : "+showAllMovies.get(0).getMovie_title());
//
//        HashMap<String, Object> hashMap = new HashMap<>();
//
//        hashMap.put("showAllMovies", showAllMovies);
//
//        return new JSONObject(hashMap);
//    }
//
//    // 영화, 극장명 선택되어있고 시간까지 선택했을 때 영화목록 조회
//    @RequestMapping(value = "/theaters/movie/{name}/{movie_title}/{show_time}", method = RequestMethod.GET)
//    public JSONObject selectTime(Theater theater) {
//        List<Theater> showTimes = reserveService.selectShowMovies(theater);
////        System.out.println("넘어온 극장명 : " + theater.getName());
////        System.out.println("넘어온 영화 : " + theater.getMovie_title());
////        System.out.println("넘어온 시간 : " + theater.getShow_time());
////        System.out.println("상영날짜 : "+showTimes.get(0).getShow_date());
////        System.out.println("영화제목 : "+showTimes.get(0).getMovie_title());
//
//        HashMap<String, Object> hashMap = new HashMap<>();

//        hashMap.put("showTimes", showTimes);
//
//        return new JSONObject(hashMap);
//    }
//
//    // 날짜 선택시 상영중인 영화, 극장별로 상영중인 영화 표시
//    @RequestMapping(value = "/theaters/movie/{show_date}", method = RequestMethod.GET)
//    public JSONObject selectDate(Theater theater) {
//        List<Theater> showDate = reserveService.selectDate(theater);
//
//        System.out.println("넘어온 날짜 : " + theater.getShow_date());
//
//        System.out.println("상영날짜 : "+showDate.get(0).getShow_date());
//
//        HashMap<String, Object> hashMap = new HashMap<>();
//
//        hashMap.put("showDate", showDate);
//
//        return new JSONObject(hashMap);
//    }

}
