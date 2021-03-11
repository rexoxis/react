package com.lsh.movie.utils;

public class PageMaker {

    private int perPage; // 한 페이지에 보여줄 게시물 수
    private int pageBlock; // 한번에 표시할 페이지 블록
    private int currentPage; // 현재 페이지
    private int totalContents; // 총 게시물 수
    private int totalPage; // 총 페이지 수
    private int startPage; // 시작페이지
    private int endPage; // 마지막 페이지
    private int startNum; // list 조회시 시작 번호
    private int endNum; // list 조회시 마지막 번호
    private int pageGroup; // 페이지 그룹 1~5가 하나의 그룹
    private int opencheck; // 영화개봉/미개봉
    private int movie_no; // 영화번호

    // 한페이지에 보여줄 게시물 수, 현재 페이지, 총 게시물 수를 생성자에 전달
    public PageMaker(int perPage, int currentPage, int totalContents, int opencheck) {
        this.perPage = perPage;
        this.currentPage = currentPage;
        this.pageBlock = 5;
        this.totalContents = totalContents;
        this.totalPage = (int) Math.ceil((double)totalContents / perPage);

        this.pageGroup = (int) Math.ceil((double)currentPage/pageBlock);
        this.endPage = pageGroup * pageBlock;
        this.startPage = endPage - (pageBlock-1);

        if (endPage > totalPage) {
            endPage = totalPage;
        }

        // mysql로 오면서 startNum 수정
        this.startNum = ((currentPage-1) * perPage);
        // list 조회시 마지막 번호
        this.endNum = startNum + perPage;

        this.opencheck = opencheck;
    }

    public int getMovie_no() {
        return movie_no;
    }

    public void setMovie_no(int movie_no) {
        this.movie_no = movie_no;
    }

    public int getOpencheck() {
        return opencheck;
    }

    public void setOpencheck(int opencheck) {
        this.opencheck = opencheck;
    }

    public int getPerPage() {
        return perPage;
    }

    public void setPerPage(int perPage) {
        this.perPage = perPage;
    }

    public int getPageBlock() {
        return pageBlock;
    }

    public void setPageBlock(int pageBlock) {
        this.pageBlock = pageBlock;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getTotalContents() {
        return totalContents;
    }

    public void setTotalContents(int totalContents) {
        this.totalContents = totalContents;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public int getStartPage() {
        return startPage;
    }

    public void setStartPage(int startPage) {
        this.startPage = startPage;
    }

    public int getEndPage() {
        return endPage;
    }

    public void setEndPage(int endPage) {
        this.endPage = endPage;
    }

    public int getStartNum() {
        return startNum;
    }

    public void setStartNum(int startNum) {
        this.startNum = startNum;
    }

    public int getEndNum() {
        return endNum;
    }

    public void setEndNum(int endNum) {
        this.endNum = endNum;
    }

    public int getPageGroup() {
        return pageGroup;
    }

    public void setPageGroup(int pageGroup) {
        this.pageGroup = pageGroup;
    }
}
