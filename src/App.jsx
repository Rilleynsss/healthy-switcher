import { useState } from "react";
import About from "./components/About/About";
import Chefs from "./components/Chefs/Chefs";
import Dishes from "./components/Dishes/Dishes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Social from "./components/Social/Social";
import Work from "./components/Work/Work";
import img_bg from "./img/main_bg.png";

const App = () => {
  const [active, setActive] = useState();
  const wheel = (e) => {
    const menu = document.querySelector("#menu");
    const recipes = document.querySelector("#recipes");
    const chefs = document.querySelector("#chefs");
    const contacts = document.querySelector("#contacts");
    const menuRect = menu.getBoundingClientRect();
    const recipesRect = recipes.getBoundingClientRect();
    const chefsRect = chefs.getBoundingClientRect();
    const contactsRect = contacts.getBoundingClientRect();
    if (menuRect.top < window.innerHeight && menuRect.bottom > 0) {
      setActive("menu");
    } else if (recipesRect.top < window.innerHeight && recipesRect.bottom > 0) {
      setActive("recipes");
    } else if (chefsRect.top < window.innerHeight && chefsRect.bottom > 0) {
      setActive("chefs");
    } else if (
      contactsRect.top < window.innerHeight &&
      contactsRect.bottom > 0
    ) {
      setActive("contacts");
    } else if (window.scrollY === 0) {
      setActive("");
    }
  };
  return (
    <div
      onWheel={(e) => {
        wheel(e);
      }}
      className="flex-col bg-custom-color"
    >
      <img src={img_bg} className="absolute w-full z-[0]" alt="" />
      <Header active={active} />
      <Main />
      <About />
      <Work />
      <Dishes />
      <Chefs />
      <Social />
      <Footer />
    </div>
  );
};

export default App;
