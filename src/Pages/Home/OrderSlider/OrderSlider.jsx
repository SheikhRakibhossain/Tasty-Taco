import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const OrderSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 10,
    },
  });
  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 bg-red-300">
          <img
            src={slide1}
            alt="food slider picture with various items of food"
            className="w-full object-cover "
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img
            src={slide2}
            alt="food slider picture with various items of food"
            className="w-full object-cover "
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          {" "}
          <img
            src={slide3}
            alt="food slider picture with various items of food"
            className="w-full object-cover "
          />
        </div>
        <div className="keen-slider__slide number-slide4">
          {" "}
          <img
            src={slide4}
            alt="food slider picture with various items of food"
            className="w-full object-cover "
          />
        </div>
        <div className="keen-slider__slide number-slide5">
          {" "}
          <img
            src={slide5}
            alt="food slider picture with various items of food"
            className="w-full object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default OrderSlider;
