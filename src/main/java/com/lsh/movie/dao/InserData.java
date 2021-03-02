package com.lsh.movie.dao;


import com.lsh.movie.vo.Seats;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;

public class InserData {
    @Autowired
    SqlSessionTemplate sqlSessionTemplate;

    public int insertData(ArrayList<Seats> seats) {
        return sqlSessionTemplate.insert("seats.insertSeats", seats);
    }
    public static void main(String[] args) {
        ArrayList<Seats> arrayList = new ArrayList<>();
        String[] array = {"a","b","c","d","e","f","g","h","i","j"};
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                Seats seats = new Seats();

                seats.setSeat_name(array[i]+(j+1));
                if (j == 2 || j == 7) {
                    seats.setSeat_check(1);
                } else {
                    seats.setSeat_check(0);
                }

                seats.setRoom_no(1); // 강북 a
                arrayList.add(seats);
            }

        }

        InserData inserData = new InserData();

        int num = inserData.insertData(arrayList);
        System.out.println(num);
//        for (Seats seats : arrayList){
//
//            System.out.print(seats.getSeat_name());
//            System.out.println();
//            System.out.print(seats.getSeat_check());
//            System.out.println();
//        }

    }
}
