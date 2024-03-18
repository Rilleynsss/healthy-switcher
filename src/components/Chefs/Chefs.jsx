import Title from "./../Title/Title";
import { ReactComponent as ChefsBg } from "../../img/CHEFS.svg";
import avatar from "../../img/Chefs/avatar1.png";
import avatar2 from "../../img/Chefs/avatar2.png";
import avatar3 from "../../img/Chefs/avatar3.png";
import imgLg from "../../img/Chefs/big_img.png";
import imgSm1 from "../../img/Chefs/small1.png";
import imgSm2 from "../../img/Chefs/small2.png";
import "../../style/index.css";

const Chefs = () => {
  const chefs = [
    {
      avatar: avatar,
      h4: "Gregory Flores",
      p: "Chef of the cold",
      imgLg: imgLg,
      imgSm1: imgSm1,
      imgSm2: imgSm2,
    },
    {
      avatar: avatar2,
      h4: "Annette Cooper",
      p: "Chef of the hot",
      imgLg: imgLg,
      imgSm1: imgSm1,
      imgSm2: imgSm2,
    },
    {
      avatar: avatar3,
      h4: "Greg Fox",
      p: "Chef macro kitchen",
      imgLg: imgLg,
      imgSm1: imgSm1,
      imgSm2: imgSm2,
    },
  ];
  return (
    <div
      onScroll={(e) => {
        console.log("fff");
      }}
      id="chefs"
      className="container pt-[120px]"
    >
      <Title img={<ChefsBg />} underline={true}>
        This Month's Chefs
      </Title>
      <div className="mt-[70px]">
        <ul className="flex justify-between">
          {chefs.map((item) => {
            return (
              <li>
                <section className="flex items-center font-helvetica-normal">
                  <img src={item.avatar} alt="" className="mr-[24px]" />
                  <section>
                    <h4 className="text-white text-[18px]">{item.h4}</h4>
                    <p className="text-gray-500 text-[12px]">{item.p}</p>
                  </section>
                </section>
                <section className="flex gap-7 mt-[24px]">
                  <img className="large" src={item.imgLg} alt="" />
                  <img className="small" src={item.imgSm1} alt="" />
                  <img className="small" src={item.imgSm2} alt="" />
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Chefs;
