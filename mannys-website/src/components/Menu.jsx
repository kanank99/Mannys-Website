import React from "react";
import { useState, useEffect, useRef } from "react";
import arrow from "../assets/arrow.svg";

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
    setXTranslate((prev) => prev + 300);
  };

  const slideMenuRight = () => {
    setXTranslate((prev) => prev - 300);
  };

  return (
    <div className="w-full h-[60px] sticky top-0 border-t border-b border-gray-400 bg-white z-20">
      <div className="max-w-[1200px] h-full mx-auto flex justify-between items-center px-4 relative overflow-hidden select-none">
        {showRightFade && (
          <div className="absolute left-0 top-0 w-full h-full menuNavFadeRight z-10 pointer-events-none"></div>
        )}
        {showLeftFade && (
          <div className="absolute right-0 top-0 w-full h-full menuNavFadeLeft z-10 pointer-events-none"></div>
        )}
        {showArrow && (
          <div className="absolute right-[20px] top-[15px] z-10">
            <img
              src={arrow}
              alt="arrow"
              className="w-[30px] h-[30px] rotate-180 cursor-pointer"
              onClick={slideMenuLeft}
            />
          </div>
        )}
        {showArrowBack && (
          <div className="absolute left-[20px] top-[15px] z-10">
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
                className={`text-lg font-semibold px-[40px] w-full h-[30px] flex ${
                  selectedCategory === "Specials"
                    ? null
                    : "border-l border-[#aaa]"
                } items-center text-nowrap bg-gradient-to-r from-[#004f71] to-[#085a83] bg-clip-text text-transparent cursor-pointer categoryUnderline relative`}
              >
                {category}
              </p>
            ) : (
              <p
                className={`text-lg font-semibold px-[40px] ${
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
  );
}

export default Menu;
