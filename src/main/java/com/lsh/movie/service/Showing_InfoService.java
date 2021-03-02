package com.lsh.movie.service;


import com.lsh.movie.dao.Showing_infoMapper;
import com.lsh.movie.vo.Showing_Info;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Showing_InfoService {
    @Autowired
    Showing_infoMapper showing_infoMapper;

    public int insertShowing_Info(Showing_Info showing_info) {
        return showing_infoMapper.insertShowing_Info(showing_info);
    }

    public List<Showing_Info> selectAllList() {
        return showing_infoMapper.selectAllList();
    }

    public int modifyShowing_Info(Showing_Info showing_info) {
        return showing_infoMapper.modifyShowing_Info(showing_info);
    }

    public int deleteShowing_info(int showing_info_no) {
        return showing_infoMapper.deleteShowing_info(showing_info_no);
    }

}
