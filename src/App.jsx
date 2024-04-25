import React from "react";
import "./input.css";
import "./output.css";
import "./Custom.css";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdOutlineSegment } from "react-icons/md";
import { useState } from "react";
import Shirt from './img/Shirt.jpeg';
import Suit from './img/Suit.jpg';
import Sweater from './img/Sweater.jpg';
import Tshirt from './img/T-shirt.jpeg';
import WinterHat from './img/WinterHat.jpeg';
import ManWithJeansJacket from './img/ManWithJeansJacket.jpg';
import GirlWithBlackDress from './img/GirlWithBlackDress.jpg';
import ManWithNavyBlueClothes from './img/ManWithNavyBlueClothes.jpeg';
import { FaArrowRight } from "react-icons/fa";
import GirlWithSweatshirt from './img/GirlWithSweatshirt.jpeg';
import ManWithHoody from './img/ManWithHoody.webp';
import WomanWithShirt from './img/WomanWithShirt.jpeg';
import ManWithTshirt from './img/ManWithT-shirt.jpg';
import WomanWithBlackTshirt from './img/WomanWithBlackT-shirt.jpeg';
import ManWithSunglasses from "./img/ManWithSunglasses.jpeg";
import WomanWithBrownSuit from "./img/WomanWithBrownSuit.jpeg";
import TwoGirls from "./img/2Girls.jpeg";
import BoyAtTheSea from "./img/BoyAtTheSea.webp";
import GirlWithPurpleDress from "./img/GirlWithPurpleDress.jpg";
import WomanHoldingBag from "./img/WomanHoldingBag.jpg";
import ManWithSunglasses2 from "./img/ManWithSunglasses2.jpg";
import WomanWithSunglasses from "./img/WomanWithSunglasses.jpeg";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen">
      <nav className="bg-black h-14 text-white fixed w-full z-10"> {/* 1st Container */}
        <div className="flex flex-col md:flex-row justify-around md:items-center">
          <div className="flex justify-around items-center">
            <h1 className="font-sans text-4xl">mrma</h1>
            <h2
              className="text-4xl md:hidden cursor-pointer pt-3"
              onClick={toggleMenu}
            >
              <MdOutlineSegment />
            </h2>
          </div>

          <ul
            className={`md:flex text-center pt-3.5 md:text-xl transition-transform
            ease-in-out cursor-pointer ${
              isOpen ? "custom-width block" : "hidden"
            } md:block`}
          >
            <div className="flex flex-col md:flex-row gap-5">
              <li className="transition-all duration-500 hover:scale-125 cursor-pointer">
                Men
              </li>
              <li className="transition-all duration-500 hover:scale-125 cursor-pointer">
                Women
              </li>
              <li className="transition-all duration-500 hover:scale-125 cursor-pointer">
                Accessories
              </li>
              <li className="transition-all duration-500 hover:scale-125 cursor-pointer">
                Winter
              </li>
              <li className="transition-all duration-500 hover:scale-125 cursor-pointer">
                Sale
              </li>
            </div>
          </ul>

          <div className="gap-5 pt-3.5 hidden md:flex">
            <span className="flex gap-1">
              <CiSearch
                className="text-2xl pt-1 transition-all duration-500 hover:scale-125
                    cursor-pointer"
              />
              <span>
                <CiHeart
                  className="text-2xl pt-1 transition-all duration-500 hover:scale-125
                    cursor-pointer"
                />
              </span>
              <h3>(12)</h3>
            </span>
            <span className="flex gap-1">
              <AiOutlineShopping
                className="text-2xl pt-1 transition-all duration-500 
                    hover:scale-125 cursor-pointer"
              />
              <h3>(5)</h3>
            </span>
          </div>
        </div>
      </nav>

      <div className="flex px-1 justify-around lg:font-['cursive'] pt-16"> {/* 2nd Container */}
            <h3 className="font-medium text-lg md:text-2xl lg:text-4xl pt-12">the</h3>
            <h1 className="font-medium text-xl md:text-4xl lg:text-8xl">Next</h1>
            <h4 className="w-[200px] pt-5 pl-2 text-sm md:text-lg">Fashion is a form of 
            self-expression with a specific context, such as time.</h4>
            <h2 className="font-medium text-xl md:text-4xl lg:text-8xl pt-16">Generation</h2>
      </div>

      <div className="flex justify-around"> {/* 3rd Container */}
          <div className="cursor-pointer">
            <img class="w-[70px] md:w-[150px] pt-8 cursor-pointer"
            src={Shirt} alt="Shirt" /></div>
            <img className="w-[100px] md:w-[200px]" src={Suit} alt="Suit" />
            <img className="w-[60px] md:w-[125px] pt-32" src={Sweater} alt="Sweater" />
            <img className="w-[80px] md:w-[175px] pt-20" src={Tshirt} alt="T-shirt" />
      </div>

      <div className="flex justify-around pt-20"> {/* 4th Container */}
            <h2 className="text-xl md:text-4xl lg:text-8xl font-medium font-['cursive']">Of</h2>
            <div>
              <h2 className="text-xl md:text-4xl lg:text-8xl font-medium font-['cursive']">Fashion</h2>
              <h4 className="text-sm md:text-lg md:font-['cursive'] pl-22 w-[200px]">
              Example of these are clothing, footwear, lifestyle, accessories.</h4>
            </div>

            <div>
              <img className="w-[80px] h-[40px] md:w-[120px] md:h-[50px]" src={WinterHat}
              alt="A Red Winter Hat"/>
              <h1 className="text-xl md:text-3xl lg:text-7xl font-medium font-['cursive']">Twist</h1>
            </div>
      </div>

      <div className="flex justify-around pt-20"> {/* 5th Container */}
            <div>
                <img src={ManWithJeansJacket} alt="A Man With a Jeans Jacket"
                className="w-32 h-40 md:w-60 md:h-72" />
                <p className="text-sm md:text-lg w-32 md:w-60 text-justify">The latest fashion news,
                beuty coverage, celebrity style, weekly updated.</p>
                <p className="pt-10 font-medium w-32 md:w-60 text-justify"><a href="#">
                <u>EXPLORE ALL PRODUCTS <FaArrowRight className="inline-flex" /></u></a></p>
            </div>

            <div>
                <div className="bg-black w-[2px] h-[200px] md:h-[400px]"></div>
            </div>

            <div>
                <img src={GirlWithBlackDress} alt="A Girl With a Black Dress"
                className="w-[110px] md:w-[210px] h-[220px] md:h-[400px]" />
                <p className="w-[110px] md:w-[210px] text-sm md:text-lg text-justify">We believe in a
                global fashion industry that conserves.</p>
            </div>

            <div>
                <img src={ManWithNavyBlueClothes} alt="A Man Witha Navy Blue Clothes"
                className="w-[70px] md:w-[150px] h-[150px] md:h-[300px]" />
                <p className="w-[70px] md:w-[150px] text-sm md:text-lg text-justify">Fashion is a form of 
                self-expression with a specific context.</p>
            </div>

      </div>

      <div className="pt-20"> {/* 6th Container */}
            <div className="font-medium md:font-['cursive'] text-2xl md:text-5xl lg:text-8xl flex
             flex-col items-end mr-[50px] md:mr-[250px]">
              <h1>Fabric that</h1>
              <h1>speaks</h1>
            </div>
      </div>

      <div className="pt-20 md:font-['cursive']"> {/* 7th Container */}
            <div className="flex align-middle justify-center">
                <h1 className="pt-[70px] md:pt-[130px] lg:pt-[120px] font-medium
                text-sm md:text-3xl lg:text-7xl w-[40px] md:w-[100px] lg:w-[250px] text-center">
                Sweat shirt</h1>
                <div className="pt-[70px] md:pt-[130px] lg:pt-[140px] font-medium 
                text-[11px] md:text-2xl lg:text-3xl">
                _______________(45)_______________</div>
                <img src={GirlWithSweatshirt} alt="A Girl With a Sweatshirt"
                className="w-[100px] h-[150px] md:w-[200px] md:h-[300px] lg:w-[250px] lg:h-[350px]" />
            </div>

            <div className="flex align-middle justify-center pt-20">
                <img src={ManWithHoody} alt="A Man Wearing a Hoody"
                className="w-[100px] h-[150px] md:w-[200px] md:h-[300px] lg:w-[250px] lg:h-[350px]" />
                <div className="pt-[70px] md:pt-[130px] lg:pt-[140px] font-medium 
                text-[11px] md:text-2xl lg:text-3xl">
                _______________(88)_______________</div>
                <h1 className="pt-[70px] md:pt-[130px] lg:pt-[120px] font-medium
                text-sm md:text-3xl lg:text-7xl">Hoodies</h1>
            </div>

            <div className="flex align-middle justify-center pt-20">
                <h1 className="pt-[70px] md:pt-[130px] lg:pt-[120px] font-medium
                text-sm md:text-3xl lg:text-7xl">Shirt</h1>
                <div className="pt-[70px] md:pt-[130px] lg:pt-[140px] font-medium 
                text-[11px] md:text-2xl lg:text-3xl">
                _______________(165)_______________</div>
                <img src={WomanWithShirt} alt="A Woman Wearing a Shirt"
                className="w-[100px] h-[150px] md:w-[200px] md:h-[300px] lg:w-[250px] lg:h-[350px]" />
            </div>

            <div className="flex align-middle justify-center pt-20">
                <img src={ManWithTshirt} alt="A Man Wearing a T-shirt"
                className="w-[100px] h-[150px] md:w-[200px] md:h-[300px] lg:w-[250px] lg:h-[350px]" />
                <div className="pt-[70px] md:pt-[130px] lg:pt-[140px] font-medium 
                text-[11px] md:text-2xl lg:text-3xl">
                _______________(78)_______________</div>
                <h1 className="pt-[70px] md:pt-[130px] lg:pt-[120px] font-medium
                text-sm md:text-3xl lg:text-7xl">T-shirt</h1>
            </div>

            <p className="pt-10 font-medium font-sans text-sm md:text-lg"><a href="#"
                className="flex justify-end mr-[100px] lg:mr-[160px]">
                <u>VIEW MORE PRODUCTS</u><FaArrowRight className="inline-flex mt-1" /></a></p>

      </div>

      <div className="pt-20"> {/* 8th Container */}
            <div className="font-medium md:font-['cursive'] text-2xl md:text-6xl lg:text-8xl
            pl-10 md:pl-20">
              <h1>Make stylish</h1>
              <h1>look anywhere</h1>
            </div>

      </div>

      <div className="flex justify-around pt-20"> {/* 9th Container */}
            <div>
                <img src={WomanWithBlackTshirt} alt="A Girl With a Black T-shirt" 
                className="w-[75px] h-[120px] md:w-[150px] md:h-[250px] lg:w-[200px] lg:h-[320px]
                lg:ml-[80px] lg:mt-[80px]"/>
                <p className="lg:pl-20 w-[75px] md:w-[150px] lg:w-[280px] text-[11px]
                md:text-lg">
                Accessories are worn at any given time by groups of people.</p>
            </div>

            <div>
                <img src={ManWithSunglasses} alt="A Man With a Sunglasses"
                className="w-[90px] md:w-[200px] lg:w-[250px] h-[160px] md:h-[310px] lg:h-[380px] 
                lg:ml-10 lg:mt-10" />
                <p className="w-[90px] md:w-[200px] lg:w-[280px] lg:pl-[2.5rem] text-[11px]
                md:text-lg">
                What's really trending this week is a roadup of the best fashion.</p>
            </div>

            <div>
                <img src={WomanWithBrownSuit} alt="A Woman With a Brown Suit"
                className="w-[120px] md:w-[250px] lg:w-[300px] h-[200px] md:h-[370px] lg:h-[430px]
                lg:mb-5" />
                <p className="w-[120px] md:w-[250px] lg:w-[300px] pl-[0.2rem] text-[11px]
                md:text-lg">
                Fashion is simply defines as the style or stules of clothing.</p>
            </div>

      </div>

      <div> {/* 10th Container */}
          <h1 className="text-center text-4xl md:text-8xl lg:text-[120px] text-gray-400">
          # F a s h i o n</h1>
      </div>

      <div className="flex justify-between pt-5"> {/* 11th Container */}
            <div>
                <div className="flex pl-5 lg:pl-20 pt-12 md:pt-0">
                <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]
                bg-black text-white md:font-['cursive']">
                  <div className="md:text-4xl lg:text-6xl pt-10 md:pt-20 lg:leading-[5rem]">
                    <h2>Special</h2>
                    <h2>collection</h2>
                    <h2>for kids</h2>
                  </div>
                  <p className="text-[11px] md:text-lg text-right pt-5 md:pt-[72px] lg:pt-12 md:pl-5">
                  NEW COLLECTION</p>
                </div>

                <div className="absolute ml-[100px] mt-[25px] md:ml-[200px] md:mt-[40px]
                lg:ml-[280px] lg:mt-[50px]">
                  <img src={TwoGirls} alt="Two Girls"
                  className="w-[100px] h-[100px] md:w-[230px] md:h-[230px] lg:w-[300px] lg:h-[300px]"/>
                  <p className="font-medium font-sans ml-[-30px] md:ml-[110px] lg:ml-[160px] mt-[30px]
                  md:mt-[5px] text-[11px] md:text-lg">
                    <a href="#">
                    <u>EXPLORE ALL</u> <FaArrowRight className="inline-flex" /></a></p>
                </div>
                </div>

            </div>

            <div className="pr-[2rem] md:pr-[3rem] lg:pr-[5rem]">
                <img src={BoyAtTheSea} alt="Boy At The Sea"
                className="w-[120px] h-[120px] md:w-[190px] md:h-[150px] lg:w-[250px] lg:h-[195px] 
                mb-[3px] md:mb-[6px] lg:mb-[10px]" />
                <img src={GirlWithPurpleDress} alt="Girl With a Purple Dress"
                className="w-[120px] h-[120px] md:w-[190px] md:h-[150px] lg:w-[250px] lg:h-[195px]" />
            </div>

      </div>

      <div className="text-center pt-40"> {/* 12th Container */}
            <h1 class="md:font-['cursive'] font-medium text-3xl md:text-5xl lg:text-7xl">
            Exclusive Collections</h1>
      </div>

      <div className="pt-20 pb-20 flex justify-around"> {/* 13th Container */}

        <div>
          <img src={WomanHoldingBag} alt="A Woman Holding a Bag"
          className="w-[90px] h-[140px] md:w-[180px] md:h-[300px] lg:w-[250px] lg:h-[400px]" />
          <p className="w-[90px] md:w-[180px] lg:w-[250px] text-[11px] md:text-lg text-justify">
          A wide collection of designs to watch, the best fashion each season, and style
           advice on how to wear them.</p>
        </div>
                
        <div>
          <img src={ManWithSunglasses2} alt="A Man With Sunglasses"
          className="w-[110px] h-[170px] md:w-[230px] md:h-[410px] lg:w-[300px] lg:h-[500px]" />
          <p className="w-[110px] md:w-[230px] lg:w-[300px] text-justify text-[11px] md:text-lg">
          All you need to know about what's new on the runway.</p>
        </div>
        <div>
          <img src={WomanWithSunglasses} alt="A Woman With Sunglasses"
          className="w-[90px] h-[140px] md:w-[180px] md:h-[300px] lg:w-[250px] lg:h-[400px]" />
          <p className="w-[90px] md:w-[180px] lg:w-[250px] text-[11px] md:text-lg text-justify">
          A roadup of the best fashion for your wardrope.</p>
        </div>

      </div>

      <footer className="w-full bg-black"> {/* 14th Container */}

        <div className="text-white md:font-['cursive'] flex justify-around pt-10">

            <div>
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium">mrma</h1><br />
                <p className="text-[11px] md:text-lg text-justify w-[90px] md:w-[200px] lg:w-[250px]">
                Fashion is a form of self-expression and autonomy at a particular peoriod and place
                in a specific context.</p>
            </div>

            <div className="pt-3">
                <h1 className="text-md md:text-xl lg:text-2xl font-medium">HOME</h1><br />
                <ul className="text-[11px] md:text-lg">
                    <li className="transition-all hover:scale-125 cursor-pointer">Men</li>
                    <li className="transition-all hover:scale-125 cursor-pointer">Women</li>
                    <li className="transition-all hover:scale-125 cursor-pointer">Accessories</li>
                    <li className="transition-all hover:scale-125 cursor-pointer">Winter</li>
                </ul>
            </div>

            <div className="pt-3">
                <h1 className="text-md md:text-xl lg:text-2xl font-medium">COMPANY</h1><br />
                <ul className="text-[11px] md:text-lg">
                    <li className="transition-all hover:scale-125 cursor-pointer">About us</li>
                    <li className="transition-all hover:scale-125 cursor-pointer">Community</li>
                    <li className="transition-all hover:scale-125 cursor-pointer">Reviews</li>
                    <li className="transition-all hover:scale-125 cursor-pointer">FAQ</li>
                </ul>
            </div>

            <div className="pt-3">
                <h1 class="text-md md:text-xl lg:text-2xl font-medium">SOCIAL</h1><br />
                <ul className="text-[11px] md:text-lg">
                    <li className="transition-all hover:scale-125 cursor-pointer">Instagram</li>
                    <li className="transition-all hover:scale-125 cursor-pointer">Facebook</li>
                    <li className="transition-all hover:scale-125 cursor-pointer">WhatsApp</li>
                    <li className="transition-all hover:scale-125 cursor-pointer">LinkedIn</li>
                </ul>
            </div>

        </div>

        <h1 className="text-white text-6xl md:text-8xl lg:text-[120px] text-center">mrma</h1><hr />

        <div className="flex text-white justify-around pt-5 text-[11px] md:text-lg">
          <p className="transition-all hover:scale-125 cursor-pointer">Privacy Policy</p>
          <p className="w-[120px] md:w-[220px] text-center pl-7">© 2024 mrma. All rights reserved.</p>
          <p className="transition-all hover:scale-125 cursor-pointer">Terms & Conditions</p>
        </div>

      </footer>

    </div>
  );
};

export default App;
