import About from "./components/About/About";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import img_bg from "./img/main_bg.png";

const App = () => {
  return (
    <div className="flex-col bg-custom-color">
      <img src={img_bg} className="absolute w-full z-[0]" alt="" />
      <Header />
      <Main />
      <About />
    </div>
  );
};

export default App;
