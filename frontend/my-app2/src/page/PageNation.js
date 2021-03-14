import React from "react";
import {Link} from "react-router-dom";


class PageNation extends React.Component {

    render() {
        const {PageMaker} = this.props;
        const currentPage = PageMaker.currentPage;
        const startPage = PageMaker.startPage;
        const endPage = PageMaker.endPage;
        const totalPage = PageMaker.totalPage;
        const onPageChange = this.props.onPageChange;

        let pageRangeArray = [];

        for (let i = startPage; i <= endPage; i++) {
            pageRangeArray.push(i);
        }
        // console.log(pageRangeArray);


        let prv;
        let next;

        if (currentPage < 5) {
            prv = <li><span><Link to="" id="' + (startPage-1) + '">이전</Link></span></li>
        }

        if (endPage < totalPage) {
            next = <li><span><Link to="" id="' + (endPage+1) + '">다음</Link></span></li>
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
                {prv}
                {pageRangeArray.map((pageNum) => (
                    <>
                        {/* {currentPage < 5 && <li><span><Link to="" id="' + (startPage-1) + '">이전</Link></span></li>}
                    {endPage < totalPage && <li><span><Link to="" id="' + (endPage+1) + '">다음</Link></span></li>}*/}
                        <li key={pageNum} onClick={() => onPageChange(pageNum)}><span>{pageNum}</span></li>
                    </>
                ))}
                {next}
            </>
        );
    }
}

// {}


export default PageNation;
