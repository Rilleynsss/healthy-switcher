import Title from "../Title/Title";
import { ReactComponent as AboutBg } from "../../img/ABOUT.svg";
import slide1 from "../../img/slider_1.png";
import slide2 from "../../img/slider_2.png";
import { useState } from "react";
import { ReactComponent as Right } from "../../img/btns/right.svg";
import { ReactComponent as Left } from "../../img/btns/left.svg";
const About = () => {
  const [slides, setSlide] = useState([slide1, slide2]);
  return (
    <div className="container relative z-[1] ">
      <div className="bg-custom-color-lighter  py-[90px] rounded-[5px] flex items-center flex-col w-full">
        <Title img={<AboutBg />}>The Basics Of Healthy Food</Title>
        <h3 className="w-[734px] mt-[31px] text-gray-400 text-center">
          In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea
          aliquip aliquip consectetur voluptate est. Eu minim dolore laboris
          enim mollit voluptate irure esse aliquip.
        </h3>

        <div className=" relative w-[734px] mt-[90px]">
          <div className=" w-full absolute flex items-center h-full  justify-between">
            <button className="translate-x-[-70px]  rounded-full border-gray-500 border-solid border-[1px] p-[15px]">
              <Left />
            </button>
            <button className="translate-x-[70px] rounded-full border-gray-500 border-solid border-[1px] p-[15px] ">
              <Right />
            </button>
          </div>
          <div className="  flex gap-9">
            {slides.map((item) => {
              return <img src={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
