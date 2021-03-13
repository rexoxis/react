import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import header from "./css/header.css";
import MovieDetail from "./page/movie/movieDetail";
import Main from "./Main";
import LoadMovies from "./page/movie/moviesPage";


function Header() {
    return (

        <Router>
            <header>
                <nav className="navbar">
                    <div className="navbar_logo">
                        <Link to="/"><img src={process.env.PUBLIC_URL + '/img/logo2.jpg'} alt="Logo"/></Link>
                    </div>

                    <ul className="navbar_menu">
                        <li><Link to="/">메인</Link></li>
                        <li><Link to="/movies/1">영화</Link></li>
                        <li><Link to="/movie/reserve">예매하기</Link></li>
                        <li><Link to="/notice">공지사항</Link></li>
                        <li><Link to="/movie/movie_register">영화등록/관리</Link></li>
                        <li><Link to="/movie/theater_register">지점등록/관리</Link></li>
                    </ul>

                    <ul className="navbar_member">
                        <li><Link to="/login/login">로그인</Link></li>
                        <li><Link to="/join/joinmember">회원가입</Link></li>
                        <li><Link to="/login/logout">로그아웃</Link></li>
                    </ul>

                    <Link to="#" className="navbar_btn">menu</Link>
                </nav>

                <Route exact path = "/" component={Main}/>
                <Route path = "/movies/:pageNo" component={LoadMovies} />
                <Route path = "/movie/reserve" component={MovieDetail} />
                <Route path = "/notice" component={MovieDetail} />
                <Route path = "/movie/movie_register" component={MovieDetail} />
                <Route path = "/movie/theater_register" component={MovieDetail} />
                <Route path = "/login/login" component={MovieDetail} />
                <Route path = "/join/joinmember" component={MovieDetail} />
                <Route path = "/login/logout" component={MovieDetail} />
            </header>
        </Router>
    );
}

export default Header;