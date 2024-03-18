import Title from "../Title/Title";
import { ReactComponent as SocialBg } from "../../img/SOCIAL.svg";
import { ReactComponent as Twitter } from "../../img/Social/ic_twitter.svg";
import { ReactComponent as Facebook } from "../../img/Social/ic_facebook.svg";
import { ReactComponent as Instagram } from "../../img/Social/ic_instagram.svg";
import img1 from "../../img/Social/placehholder.png";
import img2 from "../../img/Social/placehholder-1.png";
import img3 from "../../img/Social/placehholder-2.png";
import img4 from "../../img/Social/placehholder-3.png";
import img5 from "../../img/Social/placehholder-4.png";
import img6 from "../../img/Social/placehholder-5.png";

const Social = () => {
  return (
    <div id="contacts" className="container mt-[90px]">
      <Title underline={true} img={<SocialBg />}>
        We In Social
      </Title>
      <div className="flex justify-between mt-[90px] mb-[120px]">
        <div className="w-[350px] h-[330px] p-[25px] bg-custom-color-lighter rounded">
          <div className="flex justify-between">
            <section className="flex items-center text-white">
              <section className=" size-[40px] p-[6px] flex justify-center items-center border-solid border-[2px] border-gray-500 rounded-full">
                <Twitter />
              </section>
              <h4 className="ml-[20px]">Twitter</h4>
            </section>
            <button className="uppercase border-solid border-2 rounded-full px-8 py-2 font-helvetica-bold text-[10px] text-white opacity-70 hover:bg-custom-green hover:opacity-100 hover:border-custom-green hover:text-custom-color transition-all duration-300">
              follow us
            </button>
          </div>
          <span className="block h-[2px] w-full  my-[20px] bg-white opacity-40" />
          <h4 className="text-white opacity-65 mb-[10px]">
            24 Jun at 16:20 pm
          </h4>
          <p className="text-white text-[14px] mb-[10px] leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </p>
          <span className="text-custom-green">@DennisFerguson</span>
        </div>
        <div className="w-[350px] h-[330px] py-[25px] overflow-hidden bg-custom-color-lighter rounded">
          <div className="flex justify-between px-[25px]">
            <section className="flex items-center text-white">
              <section className=" size-[40px] p-[6px] flex justify-center items-center border-solid border-[2px] border-gray-500 rounded-full">
                <Instagram />
              </section>
              <h4 className="ml-[20px]">Instagram</h4>
            </section>
            <button className="uppercase border-solid border-2 rounded-full px-8 py-2 font-helvetica-bold text-[10px] text-white opacity-70 hover:bg-custom-green hover:opacity-100 hover:border-custom-green hover:text-custom-color transition-all duration-300">
              follow us
            </button>
          </div>
          <span className="block h-[2px] w-full  my-[20px] bg-white opacity-40" />
          <section className="flex flex-wrap">
            <img src={img1} alt="" />
            <img src="" alt="" />
            <img src={img2} alt="" />
            <img src="" alt="" />
            <img src={img3} alt="" />
            <img src="" alt="" />
            <img src={img4} alt="" />
            <img src="" alt="" />
            <img src={img5} alt="" />
            <img src="" alt="" />
            <img src={img6} alt="" />
            <img src="" alt="" />
          </section>
        </div>
        <div className="w-[350px] h-[330px] p-[25px] bg-custom-color-lighter rounded">
          <div className="flex justify-between">
            <section className="flex items-center text-white">
              <section className=" size-[40px] p-[6px] flex justify-center items-center border-solid border-[2px] border-gray-500 rounded-full">
                <Facebook />
              </section>
              <h4 className="ml-[20px]">Facebook</h4>
            </section>
            <button className="uppercase border-solid border-2 rounded-full px-8 py-2 font-helvetica-bold text-[10px] text-white opacity-70 hover:bg-custom-green hover:opacity-100 hover:border-custom-green hover:text-custom-color transition-all duration-300">
              follow us
            </button>
          </div>
          <span className="block h-[2px] w-full  my-[20px] bg-white opacity-40" />
          <h4 className="text-white opacity-65 mb-[10px]">
            24 Jun at 16:20 pm
          </h4>
          <p className="text-white text-[14px] mb-[10px] leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Social;
