import React from "react";
import "./css/main.css";

function Main() {
    return (

        <div className="main">
            <div className="banner"><img src={process.env.PUBLIC_URL + '/img/main_slider01.jpg'} alt="Banner"/></div>
            <div className="showing_movie">현재상영작</div>

            <ul className="middle">
                <li className="image1"><img src={process.env.PUBLIC_URL + '/img/poster01.jpg'} alt="Poster"/></li>
                <li className="image2"><img src={process.env.PUBLIC_URL + '/img/movie_poster3.jpg'} alt=""/></li>
                <li className="image3"><img src={process.env.PUBLIC_URL + '/img/movie_poster4.jpg'} alt=""/></li>
                <li className="image4"><img src={process.env.PUBLIC_URL + '/img/poster01.jpg'} alt=""/></li>
                <li className="image5"><img src={process.env.PUBLIC_URL + '/img/poster01.jpg'} alt=""/></li>
                <li className="image6"><img src={process.env.PUBLIC_URL + '/img/poster01.jpg'} alt=""/></li>
            </ul>
        </div>
    );
}

export default Main;