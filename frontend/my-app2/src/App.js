import React, {Component, useState} from 'react';
import axios from "axios";
import MoviesPage from "./page/movie/moviesPage";
import Clock from "./page/movie/testTimer";
import MovieDetail from "./page/movie/movieDetail";
import {Link, Route, BrowserRouter as Router} from "react-router-dom"
import Profile from "./page/login/profile";
import AuthRoute from "./page/login/authRoute";
import SignIn from "./page/login/auth";
import LoginForm from "./page/login/loginForm";
import LogoutButton from "./page/login/logOut";

function App (){
    /*
      state = {
        loading : false,
        commList : []
      };

      loadComment = async () => {
        axios
            .get('/movies/1')
            .then(({ data }) => {
              this.setState({
                loading : true,
                movieList : data.movieList
              });
            })
            .catch(e => {
              console.error(e);
              this.setState({
                loading : false
              });
            });
      };

      componentDidMount() {
        this.loadComment();
      }*/


    const [user, setUser] = useState(null);
    const authenticated = user != null;

    const login = ({ email, password }) => setUser(SignIn({ email, password }));
    const logout = () => setUser(null);
    /*
      const { movieList } = this.state;

      console.log(movieList);
*/
      return(
          <Router>
        <header>
            {/*
            <MoviesPage Movielist = {movieList}/>
            <Clock/>*/}
            <Link to={"/"}>Home</Link>
            <Link to={"/detail"}>movie</Link>
            <Link to={"/profile"}>profile</Link>
            {authenticated ? (
                <LogoutButton logout={logout} />
            ) : (
                <Link to="/login">
                    <button>Login</button>
                </Link>
            )}


            <Route exact path = "/" component={Clock} />
            <Route path = "/detail" component={MovieDetail} />
            <AuthRoute
                authenticated={authenticated}
                path="/profile"
                render={props => <Profile user={user} {...props} />}
            />
            <Route
                path="/login"
                render={props => (
                    <LoginForm authenticated={authenticated} login={login} {...props} />
                )}
            />
        </header>
          </Router>
      );


}
export default App;