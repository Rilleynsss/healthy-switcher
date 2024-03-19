import Title from "../Title/Title";
import { ReactComponent as Dish } from "../../img/DISHES.svg";
import Rating from "../Rating/Rating";
import img1 from "../../img/Recepts/image1.png";
import img2 from "../../img/Recepts/img2.png";
import img3 from "../../img/Recepts/img3.png";
import img4 from "../../img/Recepts/img4.png";
import img5 from "../../img/Recepts/img5.png";
import img6 from "../../img/Recepts/img6.png";

const Dishes = () => {
  const cards = [
    {
      img: img1,
      h3: "Featured Meal",
      h4: "Served with french fries + drink",
      p: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
    },
    {
      img: img2,
      h3: "Featured Meal",
      h4: "Served with french fries + drink",
      p: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
    },
    {
      img: img3,
      h3: "Featured Meal",
      h4: "Served with french fries + drink",
      p: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
    },
    {
      img: img4,
      h3: "Featured Meal",
      h4: "Served with french fries + drink",
      p: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
    },
    {
      img: img5,
      h3: "Featured Meal",
      h4: "Served with french fries + drink",
      p: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
    },
    {
      img: img6,
      h3: "Featured Meal",
      h4: "Served with french fries + drink",
      p: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
    },
  ];
  return (
    <div id="recipes">
      <Title underline={true} img={<Dish />}>
        Dish Of The Day
      </Title>
      <div className="mt-[90px] container flex gap-[30px] flex-wrap w-full justify-between">
        {cards.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-[350px] h-[493px] bg-custom-color-lighter"
            >
              <img src={item.img} alt="" />
              <div className="p-6 font-helvetica-normal ">
                <h3 className="text-white text-3xl mb-[2px] ">{item.h3}</h3>
                <h4 className="text-gray-400 text-xs mb-[20px]">{item.h4}</h4>
                <p className="mb-[10px] text-sm text-gray-400">{item.p}</p>
                <div className="flex justify-between items-center">
                  <Rating />
                  <button className="border-solid border-2 rounded-full px-8 py-1 font-helvetica-bold text-sm text-white opacity-70 hover:bg-custom-green hover:opacity-100 hover:border-custom-green hover:text-custom-color transition-all duration-300">
                    ORDER
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dishes;
