import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import "./css/header.css";
import MovieDetail from "./page/movie/movieDetail";
import Main from "./Main";
import MoviesPage from "./page/movie/moviesPage";



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
                        <li><Link to="/login/logout">로그아웃</Link></li>
                        <li><Link to="/join/joinmember">회원가입</Link></li>
                    </ul>

                    <Link to="#" className="navbar_btn">menu</Link>
                </nav>

                <Route exact path = "/" component={Main}/>
                <Route exact path = "/movies/:pageNo" component={MoviesPage} />
                <Route exact path = "/movies/detail/:movieNo" component={MovieDetail} />
                <Route exact path = "/comments/:movieNo/:pageNo" component={MovieDetail} />
                <Route path = "/movie/reserve"  />
                <Route path = "/notice"  />
                <Route path = "/movie/movie_register" />
                <Route path = "/movie/theater_register"  />
                <Route path = "/login/login"  />
                <Route path = "/join/joinmember"  />
                <Route path = "/login/logout"  />
            </header>
        </Router>
    );
}

export default Header;