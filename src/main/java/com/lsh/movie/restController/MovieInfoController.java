package com.lsh.movie.restController;

import com.lsh.movie.service.Movie_InfoService;
import com.lsh.movie.utils.FileUpload;
import com.lsh.movie.utils.PageMaker;
import com.lsh.movie.vo.Movie_Info;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;

@RestController
public class MovieInfoController {

    @Autowired
    private Movie_InfoService movie_infoService;

    // 상영중인 영화 목록
    @RequestMapping(value = "/movies", method = RequestMethod.GET)
    public JSONObject allMovieList() {

        List<Movie_Info> movie_infoList = movie_infoService.selectAllList();

        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("movieList", movie_infoList);

        return new JSONObject(hashMap);
    }

    // 상영중인 영화 목록 + 페이징
    @RequestMapping(value = "/movies/{pageNum}", method = RequestMethod.GET)
    public JSONObject movieList(@PathVariable("pageNum") int currentPage) {

        int totalContents = movie_infoService.countList(0);

        PageMaker pageMaker = new PageMaker(20, currentPage, totalContents, 0);

        List<Movie_Info> movie_infoList = movie_infoService.selectPageList(pageMaker);

        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("movieList", movie_infoList);
        hashMap.put("pageMaker", pageMaker);

        return new JSONObject(hashMap);
    }

    // 상영예정인 영화 목록
    @RequestMapping(value = "/comingsoon/{pageNum}", method = RequestMethod.GET)
    public JSONObject cominsoonList(@PathVariable("pageNum") int currentPage) {

        int totalContents = movie_infoService.countList(1);

        PageMaker pageMaker = new PageMaker(20, currentPage, totalContents, 1);

        List<Movie_Info> movie_infoList = movie_infoService.selectPageList(pageMaker);

        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("movieList", movie_infoList);
        hashMap.put("pageMaker", pageMaker);

        return new JSONObject(hashMap);
    }

    // 영화 상세 정보
    @RequestMapping(value = "/movies/detail/{movie_no}", method = RequestMethod.GET)
    public JSONObject movieDetail(@PathVariable int movie_no) {

        Movie_Info movie_info = movie_infoService.selectOneList(movie_no);

        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("movie_info", movie_info);

        return new JSONObject(hashMap);
    }

    // 영화 등록
    @RequestMapping(value = "/movies/info", method = RequestMethod.POST)
//    public String showing_info(@RequestBody HashMap<String, Object> movieParam, @RequestParam("poster") MultipartFile multipartFile){
    public String movie_info(Movie_Info movie_info, @RequestParam("file") MultipartFile multipartFile){
        String msg = "fail";

        String fileName = FileUpload.saveFile(multipartFile);

        movie_info.setPoster(fileName);

        int check1 = movie_infoService.insertMovie(movie_info);

        if (check1>=1) msg="insert success";

        return msg;
    }

    // 등록된 영화 수정
    @RequestMapping(value = "/movies/info/movie-no", method = RequestMethod.POST)
    public String modifyMovie_info(Movie_Info movie_info, @RequestParam("file") MultipartFile multipartFile){
        String msg = "modify fail";

        String fileName = FileUpload.saveFile(multipartFile);

        movie_info.setPoster(fileName);

        int check1 = movie_infoService.modifyMovie(movie_info);

        if (check1>=1) msg="modify success";

        return msg;
    }

    // 등록된 영화 삭제
    @RequestMapping(value = "/movies/info/{movie_no}", method = RequestMethod.DELETE)
    public String deleteMovie_info(@PathVariable int movie_no){
        String msg = "fail";

        int check1 = movie_infoService.deleteMovie(movie_no);

        if (check1>=1) msg="delete success";

        return msg;
    }

    // file 전송 테스트
    @RequestMapping(value = "/test/file", method = RequestMethod.POST)
    public String testimg(@RequestParam("file") MultipartFile multipartFile, Movie_Info movie_info){
        System.out.println("파일이름 : " + multipartFile.getOriginalFilename());
        System.out.println("파일 크기 : " + multipartFile.getSize());

        System.out.println("타이틀 : " + movie_info.getTitle());
        System.out.println("줄거리 : " + movie_info.getSummary());

        String fileName = FileUpload.saveFile(multipartFile);

        movie_info.setPoster(fileName);
        System.out.println("포스터 : " + movie_info.getPoster());

        System.out.println(fileName);
        return "ok";
    }
}
