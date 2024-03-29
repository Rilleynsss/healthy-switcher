import { ReactComponent as Time } from "../../img/main_icons/ic_watch_later.svg";
import { ReactComponent as Arrow } from "../../img/main_icons/ic_near_me.svg";
import { ReactComponent as Call } from "../../img/main_icons/ic_call.svg";

const Info = ({ white }) => {
  const list = [
    {
      svg: <Time />,
      h2: "Today 10:00 am - 7:00 pm",
      p: "Working hours",
    },
    {
      svg: <Arrow />,
      h2: "Velyka Vasylkivska 100",
      p: "Get Directions",
    },
    {
      svg: <Call />,
      h2: "+38 (063)833 24 15",
      p: "Call Online",
    },
  ];
  if (white) {
    return (
      <ul className="flex w-full  justify-between ">
        {list.map((item) => {
          return (
            <li
              key={item.h2}
              className=" flex flex-col items-center justify-center"
            >
              {item.svg}
              <h2 className="mt-[16px] text-white">{item.h2}</h2>
              <p className="opacity-50 leading-8 text-white">{item.p}</p>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <ul className="flex w-full  justify-between">
      {list.map((item) => {
        return (
          <li
            key={item.h2}
            className=" flex flex-col items-center justify-center"
          >
            {item.svg}
            <h2 className="mt-[16px]">{item.h2}</h2>
            <p className="opacity-50 leading-8">{item.p}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Info;
