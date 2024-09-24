import i1 from "./img/img1.png";
import i2 from "./img/img2.jpg";
import i3 from "./img/img3.jpg";
import Slider from "react-animated-slider-2";
// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';

const ImgSildier = () => {
  const slides = [i1, i2, i3];

  return (
    <>
      <Slider autoplay={1000} infinite={true}>
        {slides.map((slide, index) => (
          <div className="imgSilder" key={index}>
            <img className="imgSilding" src={slide} alt={index} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ImgSildier;
