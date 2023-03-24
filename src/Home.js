import { useState } from "react";
import { Carousel } from "./Carousel";
import back from "./back.png";
import next from "./next.png"
import About from "./About";

function Home() {

    const [slide, setSlides] = useState(0);
    const {image, description} = Carousel[slide]
    console.log(Carousel[slide])

    const backSlide = () => {
        setSlides ((slide => {
            slide--;
            if (slide < 0) {
                return Carousel.length -1
            }
        return slide;
}))
    }

    const nextSlide = () => {
        setSlides ( (slide => {
            slide++;
            if (slide > Carousel.length -1) {
                slide = 0;
            }
            return slide
        }))
            }

    return (
        <div>
            <div className="container cont">
                <h3 className="all">Все для строительства и ремотна</h3>
            </div>
            <div>
                <About/>
            </div>
            <div className="carousel-container">
                <h3>У нас вы найдтете:</h3>
                <div className="forward-back-cont">
                    <button className="forward-back-btn" onClick={() => backSlide()}><img src={back} alt="back"/></button>
                    <img className="carousel-img" src={image} alt="carousel-item"/>
                    <button className="forward-back-btn" onClick={() => nextSlide()}><img src={next} alt="next"/></button>
                </div>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default Home;