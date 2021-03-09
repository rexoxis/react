import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import footer from "./css/footer.css";

function Footer() {
    return (

        <Router>
            <footer className="footer">
                <ul className="social_link">
                    <li><Link to="#">Twitter</Link></li>
                    <li><Link to="#">Facebook</Link></li>
                    <li><Link to="#">Instagram</Link></li>
                </ul>
                <h3>Copyright 2020. Lee All Rights Reserved.</h3>
            </footer>

                <Route path = "/" />
                <Route path = "/movie/movies"/>
                <Route path = "/movie/reserve"/>
        </Router>
    );
}

export default Footer;