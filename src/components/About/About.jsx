import Title from "../Title/Title";
import { ReactComponent as AboutBg } from "../../img/ABOUT.svg";
import slide1 from "../../img/slider_1.png";
import slide2 from "../../img/slider_2.png";
import { useState } from "react";
import { ReactComponent as Right } from "../../img/btns/right.svg";
import { ReactComponent as Left } from "../../img/btns/left.svg";
import "../../style/index.css";
const About = ({ pos }) => {
  const [slides] = useState([slide1, slide2, slide1, slide2]);
  const [idxSlide, setIdxSlide] = useState(0);
  const changeSlide = (type) => {
    switch (type) {
      case "left":
        if (idxSlide > 0) {
          setIdxSlide((prev) => prev - 1);
        }
        if (idxSlide === 0) {
          setIdxSlide(slides.length - 2);
        }
        break;
      case "right":
        if (slides.length > idxSlide + 2) {
          setIdxSlide((prev) => prev + 1);
        }
        if (idxSlide + 2 === slides.length) {
          setIdxSlide(0);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div id="menu" className="container relative z-[1] ">
      <div className="bg-custom-color-lighter  py-[90px] rounded-[5px] flex items-center flex-col w-full">
        <Title img={<AboutBg />}>The Basics Of Healthy Food</Title>
        <h3 className="w-[734px] mt-[31px] text-gray-400 text-center">
          In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea
          aliquip aliquip consectetur voluptate est. Eu minim dolore laboris
          enim mollit voluptate irure esse aliquip.
        </h3>

        <div className=" relative  w-[734px] mt-[90px]">
          <div className=" w-full absolute flex items-center h-full  justify-between">
            <button
              onClick={() => changeSlide("left")}
              className="customHover translate-x-[-70px] rounded-full transition-all duration-300 border-gray-500 border-solid border-[1px] p-[15px] hover:border-custom-green"
            >
              <Left className="transition-all duration-300" />
            </button>
            <button
              onClick={() => changeSlide("right")}
              className="customHover translate-x-[70px] rounded-full transition-all duration-300 border-gray-500 border-solid border-[1px] p-[15px] hover:border-custom-green "
            >
              <Right className="transition-all duration-300" />
            </button>
          </div>
          <div className=" overflow-hidden flex gap-9">
            {slides.map((item, idx) => {
              return (
                <img
                  style={{ transform: `translateX(-${386 * idxSlide}px)` }}
                  className="transition-all"
                  key={idx}
                  src={item}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
