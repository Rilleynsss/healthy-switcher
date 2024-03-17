import Title from "../Title/Title";
import { ReactComponent as Wrk } from "../../img/WORK.svg";

const Work = () => {
  const cards = [
    {
      h3: "Pick Meals",
      p: "Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.",
    },
    {
      h3: "Choose How Often",
      p: "Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!",
    },
    {
      h3: "Fast Deliveries",
      p: "Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.",
    },
    {
      h3: "Tasty Meals",
      p: "Gobble makes cooking fast, so you have more time to unwind and be with family.",
    },
  ];
  return (
    <div className="mt-[90px] mb-[120px] container">
      <Title underline={true} img={<Wrk />}>
        How It Works
      </Title>
      <ul className="flex justify-between mt-[90px]">
        {cards.map((item) => {
          return (
            <li
              key={item.h3}
              className="w-[255px] h-[206px] flex flex-col font-helvetica-normal bg-custom-color-lighter rounded p-6 t text-white transition-all duration-300 group hover:bg-custom-green  hover:opacity-100 "
            >
              <h3 className=" group-hover:text-custom-color text-2xl mb-[10px] transition-all duration-300">
                {item.h3}
              </h3>
              <span className="w-[56px] rounded h-[2px] bg-custom-green mb-[25px] group-hover:bg-custom-color transition-all duration-300"></span>
              <p className="text-sm opacity-60 group-hover:opacity-100 group-hover:text-custom-color transition-all duration-300">
                {item.p}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Work;
