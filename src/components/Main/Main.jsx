import { ReactComponent as Time } from "../../img/main_icons/ic_watch_later.svg";
import { ReactComponent as Arrow } from "../../img/main_icons/ic_near_me.svg";
import { ReactComponent as Call } from "../../img/main_icons/ic_call.svg";

const Main = () => {
  return (
    <div className="bg-mainBg h-screen bg-no-repeat bg-cover">
      <div className="container flex flex-col h-screen items-center justify-center">
        <h1>
          Your <span>favourite food</span> delivered <span>hot & fresh</span>
        </h1>
        <h2>
          HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping &
          marinating, so you can cook a fresh homemade dinner in just 15
          minutes.
        </h2>
        <button>Order Now</button>
        <ul className="flex w-full justify-between">
          <li className="items-center justify-center">
            <Time />
            <h2>Today 10:00 am - 7:00 pm</h2>
            <p>Working hours</p>
          </li>
          <li>
            <Arrow />
            <h2>Today 10:00 am - 7:00 pm</h2>
            <p>Working hours</p>
          </li>
          <li>
            <Call />
            <h2>Today 10:00 am - 7:00 pm</h2>
            <p>Working hours</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
