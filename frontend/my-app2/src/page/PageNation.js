import React from "react";
import {Link} from "react-router-dom";


class PageNation extends React.Component {

    render() {
        const {PageMaker} = this.props;
        const currentPage = PageMaker.currentPage;
        const startPage = PageMaker.startPage;
        const endPage = PageMaker.endPage;
        const totalPage = PageMaker.totalPage;

        let prv;
        let next;
        let pageNum;

        if (currentPage < 5) {
            prv = <li><span><Link to="" id="' + (startPage-1) + '">이전</Link></span></li>
        }

        if(endPage < totalPage) {
            next = <li><span><Link to="" id="' + (endPage+1) + '">다음</Link></span></li>
        }

        console.log(PageMaker);

        {[...Array(endPage)].map((n, index) => {
                return (
                    <>
                        {/* {currentPage < 5 && <li><span><Link to="" id="' + (startPage-1) + '">이전</Link></span></li>}
                        {endPage < totalPage && <li><span><Link to="" id="' + (endPage+1) + '">다음</Link></span></li>}*/}

                        <li><span><Link to=""> 1 </Link></span></li>
                    </>

                );
        })}
    }
}

export default PageNation;
