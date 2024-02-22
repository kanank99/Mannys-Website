import React from "react";
import { useState, useEffect, useRef } from "react";
import arrow from "../assets/arrow.svg";
import introImg from "../assets/menu/menuIntroImg.png";
import MenuItem from "./MenuItem";

function Menu() {
  //onClick slide menu to the left

  const [xTranslate, setXTranslate] = useState(0);
  const [showArrow, setShowArrow] = useState(true);
  const [showArrowBack, setShowArrowBack] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const menuRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("Specials");

  useEffect(() => {
    // Assuming you have a way to calculate the total width of your menu
    const updateArrowVisibility = () => {
      if (menuRef.current) {
        const menuWidth = menuRef.current.scrollWidth; // Total width of the menu
        // console.log("menuWidth", menuWidth); // "menuWidth 1920
        const containerWidth = menuRef.current.offsetWidth; // Visible width of the container
        // console.log("containerWidth", containerWidth); // "containerWidth 1200
        const maxTranslate = menuWidth - containerWidth;
        // console.log("maxTranslate", maxTranslate); // "maxTranslate 720
        setShowArrow(xTranslate < maxTranslate);
        setXTranslate((prev) => Math.min(prev, maxTranslate));
        setShowRightFade(xTranslate < maxTranslate);
        // console.log(showRightFade);
      }

      if (xTranslate > 0) {
        setShowLeftFade(true);
        setShowArrowBack(true);
      } else {
        setShowLeftFade(false);
        setShowArrowBack(false);
        setXTranslate(0);
      }
    };

    updateArrowVisibility();
  }, [xTranslate]); // Recalculate whenever xTranslate changes

  const slideMenuLeft = () => {
    setXTranslate((prev) => prev + 600);
  };

  const slideMenuRight = () => {
    setXTranslate((prev) => prev - 600);
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="max-w-[1200px] mx-auto pb-[40px] pt-[60px]">
          <div className="flex justify-between items-center mx-[30px]">
            <div className="max-w-[400px]">
              <div className="mb-[20px]">
                <h1 className="text-[44px] font-bold leading-[50px]">
                  Ordering From <span className="text-[#004f71]">Manny's</span>
                </h1>
                <p className="text-sm text-[#565462] font-serif mt-[20px]">
                  2520 Boiling Springs Rd., Boiling Springs, S.C. 29316
                </p>
              </div>
              <a
                class="mt-[40px] inline-flex justify-center items-center gap-x-3 text-center w-[200px] bg-gradient-to-tl from-[#004F71] to-[#138AB5] hover:brightness-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                href="#"
              >
                Take Out
                <svg
                  class="flex-shrink-0 size-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </div>
            <div className="max-h-[362px] overflow-hidden rounded-xl">
              <img
                src={introImg}
                alt="introImg"
                className="bg-cover w-[362px] -translate-y-[160px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="menuIntroBgImgMobile w-full h-[500px] flex items-center justify-center text-center text-white">
          <div className="w-full">
            <div className="mb-[30px]">
              <h1 className="text-[44px] font-bold leading-[50px] word-stroke-2">
                Ordering From{" "}
                <span className="text-[#138AB5] word-stroke-1">Manny's</span>
              </h1>
              <p className="text-sm text-[white] font-serif mt-[10px]">
                2520 Boiling Springs Rd., Boiling Springs, S.C. 29316
              </p>
            </div>
            <a
              class="inline-flex justify-center items-center gap-x-3 text-center w-[200px] bg-gradient-to-tl from-[#004F71] to-[#138AB5] hover:brightness-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              href="#"
            >
              Take Out
              <svg
                class="flex-shrink-0 size-4"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[60px] sticky top-0 border-t border-b border-gray-400 bg-white z-20">
        <div className="max-w-[1200px] h-full mx-auto flex justify-between items-center px-4 relative overflow-scroll no-scrollbar md:overflow-hidden select-none">
          {showRightFade && (
            <div className="hidden md:block absolute left-0 top-0 w-full h-full menuNavFadeRight z-10 pointer-events-none"></div>
          )}
          {showLeftFade && (
            <div className="hidden md:block absolute right-0 top-0 w-full h-full menuNavFadeLeft z-10 pointer-events-none"></div>
          )}
          {showArrow && (
            <div className="hidden md:block absolute right-[20px] top-[15px] z-10">
              <img
                src={arrow}
                alt="arrow"
                className="w-[30px] h-[30px] rotate-180 cursor-pointer"
                onClick={slideMenuLeft}
              />
            </div>
          )}
          {showArrowBack && (
            <div className="hidden md:block absolute left-[20px] top-[15px] z-10">
              <img
                src={arrow}
                alt="arrow"
                className="w-[30px] h-[30px] cursor-pointer"
                onClick={slideMenuRight}
              />
            </div>
          )}
          <div
            ref={menuRef}
            style={{
              transform: `translateX(-${xTranslate}px)`,
              transition: "all 300ms ease-in-out",
            }}
            className="flex w-full justify-between items-center text-[#aaa] max-h-[60px]"
          >
            {[
              "Specials",
              "Appetizers",
              "Greek Classics",
              "Pizza",
              "Calzones",
              "Subs",
              "Classics",
              "Surf & Turf",
              "Famous Dishes",
              "Burgers & Chicken",
              "Philly Steak",
              "Childrens Menu",
              "Sides",
              "Drinks",
            ].map((category) =>
              selectedCategory === category ? (
                <p
                  className={`text-md md:text-lg font-semibold px-[20px] md:px-[40px] w-full h-[30px] flex ${
                    selectedCategory === "Specials"
                      ? null
                      : "border-l border-[#aaa]"
                  } items-center text-nowrap bg-gradient-to-r from-[#004f71] to-[#085a83] bg-clip-text text-transparent cursor-pointer categoryUnderline relative`}
                >
                  {category}
                </p>
              ) : (
                <p
                  className={`text-md md:text-lg font-semibold px-[20px] md:px-[40px] ${
                    category === "Specials" ? null : "border-l border-[#aaa]"
                  }  w-full h-[30px] flex items-center text-nowrap cursor-pointer`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </p>
              )
            )}
          </div>
        </div>
        {/*Menu Navigation and Search*/}
      </div>
    </>
  );
}

export default Menu;
