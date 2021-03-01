package com.lsh.movie.dao;

import com.lsh.movie.vo.Seats;
import com.lsh.movie.vo.Showing_Info;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Showing_infoMapper {

    public int insertShowing_Info(Showing_Info showing_info);

    public List<Showing_Info> selectAllList();

    public int modifyShowing_Info(Showing_Info showing_info);

    public int deleteShowing_info(int showing_info_no);
}
