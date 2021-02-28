package com.lsh.movie;

import com.lsh.movie.dao.MemberMapper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MovieApplication  {

    public static void main(String[] args) {
        SpringApplication.run(MovieApplication.class, args);
    }
}
