import React from "react";
import main from "./css/main.css";
import Img1 from "./img/poster01.jpg";
import Img2 from "./img/movie_poster3.jpg";
import Img3 from "./img/movie_poster4.jpg";
import Img4 from "./img/poster01.jpg";
import Img5 from "./img/poster01.jpg";
import Img6 from "./img/poster01.jpg";
import slide1 from "./img/main_slider01.jpg";

function Main() {
    return (

        <div className="main">
            <div className="banner"><img src={slide1} alt="Banner"/></div>
            <div className="showing_movie">현재상영작</div>

            <ul className="middle">
                <li className="image1"><img src={Img1} alt="Poster"/></li>
                <li className="image2"><img src={Img2} alt=""/></li>
                <li className="image3"><img src={Img3} alt=""/></li>
                <li className="image4"><img src={Img4} alt=""/></li>
                <li className="image5"><img src={Img5} alt=""/></li>
                <li className="image6"><img src={Img6} alt=""/></li>
            </ul>
        </div>
    );
}

export default Main;