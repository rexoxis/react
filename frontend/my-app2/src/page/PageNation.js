import React, {Fragment} from "react";
import {Link} from "react-router-dom";


class PageNation extends React.Component {

    render() {
        const {PageMaker} = this.props;
        const currentPage = PageMaker.currentPage;
        const startPage = PageMaker.startPage;
        const endPage = PageMaker.endPage;
        const totalPage = PageMaker.totalPage;
        // const onPageChange = this.props.onPageChange;
        const path = this.props.path;
        console.log("path : " + path);
        let pageRangeArray = [];

        for (let i = startPage; i <= endPage; i++) {
            pageRangeArray.push(i);
        }
        // console.log(pageRangeArray);

        // console.log(endPage+1);


        let prev;
        let next;
        // 이전 버튼
        if (currentPage > 5) {
            prev = <li><span><Link to={path + (startPage - 1)}>이전</Link></span></li>
        }
        // 다음 버튼
        if (endPage < totalPage) {
            next = <li><span><Link to={path + (endPage + 1)}>다음</Link></span></li>
        }

        // console.log(PageMaker);
        // let items = pageRangeArray.map((pageNum) => (
        //     <>
        //         {/* {currentPage < 5 && <li><span><Link to="" id="' + (startPage-1) + '">이전</Link></span></li>}
        //             {endPage < totalPage && <li><span><Link to="" id="' + (endPage+1) + '">다음</Link></span></li>}*/}
        //         <li key={pageNum} onClick={() => onPageChange(pageNum)}><span>{pageNum}</span></li>
        //     </>
        // ))
        // console.log("test" + items);


        return (
            <>
                {prev}
                {pageRangeArray.map((pageNum) => (
                    <Fragment key={pageNum}>
                        <li><Link to={path + pageNum}><span>{pageNum}</span></Link></li>
                    </Fragment>
                ))}
                {next}

            </>
        );
    }
}


export default PageNation;
