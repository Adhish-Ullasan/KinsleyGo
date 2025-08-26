import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick";




export default function SimpleSlider({ children }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    autoplay :true,
    autoplaySpeed : 2000,
    pauseOnHover: true

  };

  const sliderRef = useRef(null)

  const handleNext = ()=> {
    sliderRef.current.slickNext()
  }

  const handleBack = () => {
    sliderRef.current.slickPrev()
  }

  return (
   <div>
     <Slider {...settings} ref={sliderRef}>
      {children}
    </Slider>
      <div className="sliderButton">
        <div className="btn-wrapper">
          <button id="backButton" onClick={handleBack}><ChevronLeft /></button>
          <button id="nextButton" onClick={handleNext}><ChevronRight /></button>
        </div>
      </div>
   </div>
  );
}