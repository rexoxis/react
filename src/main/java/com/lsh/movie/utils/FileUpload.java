package com.lsh.movie.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

public class FileUpload {

//    static String UPLOAD_PATH = "c:\\fileupload";
    static String UPLOAD_PATH = "D:\\movieProject\\src\\main\\webapp\\resources\\img";
    public static String saveFile(MultipartFile file){
        // 파일 이름 변경
        UUID uuid = UUID.randomUUID();
        String saveName = uuid + "_" + file.getOriginalFilename();

        System.out.println("saveName: "+saveName);

        // 저장할 File 객체를 생성
        File saveFile = new File(UPLOAD_PATH,saveName); // 저장할 폴더 이름, 저장할 파일 이름

        try {
            file.transferTo(saveFile); // 업로드 파일에 saveFile이라는 껍데기 입힘
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }

        return saveName;
    } // end saveFile(
}
