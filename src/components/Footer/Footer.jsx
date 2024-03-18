import Info from "./../Info/Info";
import { ReactComponent as Logo } from "../../img/Logo.svg";
const Footer = () => {
  return (
    <div className="bg-custom-color-lighter py-[30px] ">
      <div className="container ">
        <Info white={true} />
      </div>
      <span className="block h-[2px] w-full  my-[30px] bg-white opacity-40" />
      <div className="container flex flex-col items-center">
        <div className="flex items-center h-full mb-[10px]">
          <Logo className=" mr-6" />
          <p className="items-center pt-[5px] text-green-600 font-bold">
            HEALTHY SWITCHER
          </p>
        </div>
        <p className="text-white opacity-40">
          © Designed by Yellow Snow. All Rights Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
