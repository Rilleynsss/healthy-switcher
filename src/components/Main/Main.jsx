import Info from "../Info/Info";

const Main = () => {
  return (
    <div className="relative z-[1]">
      <div className="container flex flex-col h-screen items-center justify-center text-white">
        <h1 className="text-7xl text-center font-helvetica-light w-3/4">
          Your <span className="font-helvetica-bold">favourite food</span>{" "}
          delivered <span className="font-helvetica-bold">hot & fresh</span>
        </h1>
        <h2 className="font-helvetica-normal opacity-70 mt-[16px] w-[595px]">
          HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping &
          marinating, so you can cook a fresh homemade dinner in just 15
          minutes.
        </h2>
        <button className=" mt-[40px] rounded-full text-lg tracking-widest  bg-custom-green py-[25px] px-[58px] font-helvetica-bold text-custom-color">
          Order Now
        </button>
        <Info />
      </div>
    </div>
  );
};

export default Main;
