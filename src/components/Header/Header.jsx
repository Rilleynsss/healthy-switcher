import { ReactComponent as Logo } from "../../img/Logo.svg";

const Header = ({ active }) => {
  return (
    <header
      onClick={() => console.log(active)}
      className=" border-b-[3px] border-gray-500/65 w-full fixed z-10 "
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="flex h-24 items-center justify-between container">
        <div className="flex items-center  ">
          <Logo className=" mr-6" />
          <p className="items-center text-green-600 font-bold">
            HEALTHY SWITCHER
          </p>
        </div>

        <ul className="flex text-white ">
          <li
            className={`pl-6 font-helvetica-bold text-sm hover:text-green-600 transition-all duration-300 ${
              active === "menu" ? "text-custom-green" : ""
            }`}
          >
            <a href="#menu">Menu</a>
          </li>
          <li
            className={`pl-6 font-helvetica-bold text-sm hover:text-green-600 transition-all duration-300 ${
              active === "recipes" ? "text-custom-green" : ""
            }`}
          >
            <a href="#recipes">Recipes</a>
          </li>
          <li
            className={`pl-6 font-helvetica-bold text-sm hover:text-green-600 transition-all duration-300 ${
              active === "chefs" ? "text-custom-green" : ""
            }`}
          >
            <a href="#chefs">Chefs</a>
          </li>
          <li
            className={`pl-6 font-helvetica-bold text-sm hover:text-green-600 transition-all duration-300 ${
              active === "contacts" ? "text-custom-green" : ""
            }`}
          >
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
