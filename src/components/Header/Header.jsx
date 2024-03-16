import { ReactComponent as Logo } from "../../img/Logo.svg";

const Header = () => {
  return (
    <header
      className=" border-b-[3px] border-gray-500/65 w-full fixed z-10 "
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="flex h-24 items-center justify-between container">
        <div className="flex items-center ">
          <Logo className=" mr-6" />
          <p className="items-center text-green-600">HEALTHY SWITCHER</p>
        </div>

        <ul className="flex text-white ">
          <li className="pl-6 font-helvetica-bold text-sm hover:text-green-600 transition-all duration-300 ">
            <a href="#">Menu</a>
          </li>
          <li className="pl-6 font-helvetica-bold text-sm hover:text-green-600 transition-all duration-300 ">
            <a href="#">Recipes</a>
          </li>
          <li className="pl-6 font-helvetica-bold text-sm hover:text-green-600 transition-all duration-300 ">
            <a href="#">Chefs</a>
          </li>
          <li className="pl-6 font-helvetica-bold text-sm hover:text-green-600 transition-all duration-300 ">
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
