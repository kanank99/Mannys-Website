import React from "react";
import { useState, useEffect, useRef } from "react";
import arrow from "../assets/arrow.svg";
import introImg from "../assets/menu/menuIntroImg.png";
import MenuItem from "./MenuItem";
// import lasagna from "../assets/menu/lasagna.jpg";
import Monday from "../assets/menu/MondayChickenOverRice.jpg";
import Tuesday from "../assets/menu/TuesdayBakedZiti.jpg";
import Wednesday from "../assets/menu/WednesdaySpaguetti.jpg";
import Thursday from "../assets/menu/ThursdayCheeseRavioli.jpg";
import Friday from "../assets/menu/FridayFriedFlounderPlate.jpg";
import dolmadakia from "../assets/menu/dolmadakia.jpg";
import friedMusrhooms from "../assets/menu/friedMushroom.jpg";
import cheeseStick from "../assets/menu/cheeseStick.jpg";
import cheeseFries from "../assets/menu/cheeseFries.jpg";
import chickenStrips from "../assets/menu/chickenStrips.jpg";
import puffs from "../assets/menu/puffs.jpg";
import friedPickles from "../assets/menu/friedPickles.jpg";
import pitaTzatziki from "../assets/menu/pitaTzatziki.jpg";
import greekSalad from "../assets/menu/greekSalad.jpg";
import antipastoSalad from "../assets/menu/antipastoSalad.jpg";
import chefSalad from "../assets/menu/chefSalad.jpg";
import chickenSalad from "../assets/menu/chickenSalad.jpg";

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
            <div className="max-w-[400px] flex flex-col gap-8">
              <div className="mb-[20px]">
                <h1 className="text-[44px] font-bold leading-[50px]">
                  Ordering From <span className="text-[#004f71]">Manny's</span>
                </h1>
                <p className="text-sm text-[#565462] font-serif mt-[20px]">
                  2520 Boiling Springs Rd., Boiling Springs, S.C. 29316
                </p>
              </div>
              {/* <a
                class="light mt-[40px] inline-flex justify-center items-center gap-x-3 text-center w-[200px] bg-gradient-to-tl from-[#004F71] to-[#138AB5] hover:brightness-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
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
              </a> */}
              <div className="flex gap-4">
                <a href="#" class="btn btn-hover">
                  Take Out
                </a>
                <a href="#" class="btn btn-hover">
                  Catering
                </a>
              </div>
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

        <div className="max-w-[1200px] mt-[50px] mx-auto">
          <div className="flex flex-col px-8 min-[1270px]:px-0">
            <h1 className="text-black text-2xl font-semibold">Specials</h1>
            <p className="text-[#565462] text-lg font-serif ">
              Check out our daily specials
            </p>
            <div className="hidden lg:block">
              <div className="flex justify-between gap-3 mt-[20px]">
                <MenuItem
                  mobile={false}
                  hasBadge={true}
                  titleFontSize="text-2xl"
                  badge="Monday"
                  itemTitle="Chicken Over Rice"
                  backgroundImage={Monday}
                  description="Juicy chicken atop seasoned rice with a side of veggies. Simple, flavorful, and satisfying."
                  price="13.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={true}
                  titleFontSize="text-2xl"
                  badge="Tuesday"
                  itemTitle="Baked Ziti"
                  backgroundImage={Tuesday}
                  description="Pasta layered with meat sauce, ricotta, mozzarella, and Parmesan, baked until golden."
                  price="13.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={true}
                  titleFontSize="text-md"
                  badge="Wednesday"
                  itemTitle="Spaguetti w/ Meatballs & Mushrooms"
                  backgroundImage={Wednesday}
                  description="Classic spaghetti in marinara with hearty meatballs and mushrooms. Comfort in a bowl."
                  price="13.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={true}
                  titleFontSize="text-2xl"
                  badge="Thursday"
                  itemTitle="Cheese Ravioli"
                  backgroundImage={Thursday}
                  description="Tender ravioli filled with a rich blend of cheeses, served in a smooth tomato sauce."
                  price="13.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={true}
                  titleFontSize="text-2xl"
                  badge="Friday"
                  itemTitle="Fried Flounder Plate"
                  backgroundImage={Friday}
                  description="Crispy, golden-brown flounder fillets served with a side of fries and coleslaw. A classic favorite."
                  price="13.99"
                />
              </div>
            </div>

            <div className="lg:hidden flex flex-col gap-4 mt-[20px]">
              <MenuItem
                mobile={true}
                hasBadge={true}
                titleFontSize="text-2xl"
                badge="Monday"
                itemTitle="Chicken Over Rice"
                backgroundImage={Monday}
                description="Juicy chicken atop seasoned rice with a side of veggies. Simple, flavorful, and satisfying."
                price="13.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={true}
                titleFontSize="text-2xl"
                badge="Tuesday"
                itemTitle="Baked Ziti"
                backgroundImage={Tuesday}
                description="Pasta layered with meat sauce, ricotta, mozzarella, and Parmesan, baked until golden."
                price="13.99"
              />

              <MenuItem
                mobile={true}
                hasBadge={true}
                titleFontSize="text-lg"
                badge="Wednesday"
                itemTitle="Spaguetti w/ Meatballs & Mushrooms"
                backgroundImage={Wednesday}
                description="Classic spaghetti in marinara with hearty meatballs and mushrooms. Comfort in a bowl."
                price="13.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={true}
                titleFontSize="text-2xl"
                badge="Thursday"
                itemTitle="Cheese Ravioli"
                backgroundImage={Thursday}
                description="Tender ravioli filled with a rich blend of cheeses, served in a smooth tomato sauce."
                price="13.99"
              />

              <MenuItem
                mobile={true}
                hasBadge={true}
                titleFontSize="text-2xl"
                badge="Friday"
                itemTitle="Fried Flounder Plate"
                backgroundImage={Friday}
                description="Crispy, golden-brown flounder fillets served with a side of fries and coleslaw. A classic favorite."
                price="13.99"
              />
            </div>
            <h1 className="text-black text-2xl font-semibold mt-10">
              Appetizers
            </h1>
            <p className="text-[#565462] text-lg font-serif mb-6">
              Start your meal off right
            </p>
            <div className="hidden lg:block">
              <div className="flex justify-between gap-3 mt-[20px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Dolmadakia"
                  backgroundImage={dolmadakia}
                  description="Six stuffed grape leaves with pita bread and bechamel sauce."
                  price="9.49"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Fried Mushrooms"
                  backgroundImage={friedMusrhooms}
                  description="Fresh whole button mushrooms battered and seasoned just right, then fried up crisp and delicious on the inside."
                  price="9.29"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-xl"
                  itemTitle="Mozzarella Cheese Sticks"
                  backgroundImage={cheeseStick}
                  description="Smooth creamy mozzarella cheese lightly coated with delicious batter and fried to perfection."
                  price="9.29"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-lg"
                  itemTitle="Layered Cheese Fries w/Bacon"
                  backgroundImage={cheeseFries}
                  description="Golden brown french fries covered with lots of cheese & bacon."
                  price="9.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Chicken Strips"
                  backgroundImage={chickenStrips}
                  description="4 chicken strips Served with french fries & choice of dipping sauce: honey mustard or ranch"
                  price="14.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-xl"
                  itemTitle="Cheese and Spinach Pastry Puffs"
                  backgroundImage={puffs}
                  description="(3) Cheese and (3) spinach filled puffs. A scrumptious delight!"
                  price="10.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Fried Pickles"
                  backgroundImage={friedPickles}
                  description="Golden-crisp and served with ranch dressing with a twist."
                  price="8.29"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Pita and Tzatziki Sauce"
                  backgroundImage={pitaTzatziki}
                  description="Cucumber, dill, and a hint of lemon define this refreshing classic, served with a side of pita."
                  price="9.29"
                />
              </div>
            </div>

            <div className="lg:hidden flex flex-col gap-4 mt-[20px]">
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Dolmadakia"
                backgroundImage={dolmadakia}
                description="Six stuffed grape leaves with pita bread and bechamel sauce."
                price="9.49"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Fried Mushrooms"
                backgroundImage={friedMusrhooms}
                description="Fresh whole button mushrooms battered and seasoned just right, then fried up crisp and delicious on the inside."
                price="9.29"
              />

              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Mozzarella Cheese Sticks"
                backgroundImage={cheeseStick}
                description="Smooth creamy mozzarella cheese lightly coated with delicious batter and fried to perfection."
                price="9.29"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-lg"
                itemTitle="Layered Cheese Fries w/Bacon"
                backgroundImage={cheeseFries}
                description="Golden brown french fries covered with lots of cheese & bacon."
                price="9.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Chicken Strips"
                backgroundImage={chickenStrips}
                description="4 chicken strips Served with french fries & choice of dipping sauce: honey mustard or ranch"
                price="14.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-lg"
                itemTitle="Cheese and Spinach Pastry Puffs"
                backgroundImage={puffs}
                description="(3) Cheese and (3) spinach filled puffs. A scrumptious delight!"
                price="10.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Fried Pickles"
                backgroundImage={friedPickles}
                description="Golden-crisp and served with ranch dressing with a twist."
                price="8.29"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Pita and Tzatziki Sauce"
                backgroundImage={pitaTzatziki}
                description="Cucumber, dill, and a hint of lemon define this refreshing classic, served with a side of pita."
                price="9.29"
              />
            </div>
            <h1 className="text-black text-2xl font-semibold mt-10">Salads</h1>
            <p className="text-[#565462] text-lg font-serif mb-6">
              Fresh and delicious
            </p>
            <div className="hidden lg:block">
              <div className="flex justify-between gap-3 mt-[20px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Antipasto Salad"
                  backgroundImage={antipastoSalad}
                  description="Mixed imported Italian meets, ham, salami, pepperoni, Genoa Salami, roast beef, mozzarella cheese rolled and cut atop a garden salad."
                  price="11.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Chef Salad"
                  backgroundImage={chefSalad}
                  description="Smoked ham, smoked turkey, lettuce, tomatoes, boiled egg, american cheese, and bacon."
                  price="11.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-xl"
                  itemTitle="Grilled Chicken Ceasar Salad"
                  backgroundImage={chickenSalad}
                  description="Romaine lettuce, croutons, shredded parmesan cheese. Topped with grilled chicken."
                  price="13.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Greek Salad"
                  backgroundImage={greekSalad}
                  description="Crispy iceberg lettuce, tomato, cucumbers, bell peppers, onions, greek pitted black olives, feta cheese & pepperoncini peppers. ADD Chicken: $5.29"
                  price="9.99"
                />
              </div>
            </div>

            <div className="lg:hidden flex flex-col gap-4 mt-[20px]">
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Antipasto Salad"
                backgroundImage={antipastoSalad}
                description="Mixed imported Italian meets, ham, salami, pepperoni, Genoa Salami, roast beef, mozzarella cheese rolled and cut atop a garden salad."
                price="11.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Chef Salad"
                backgroundImage={chefSalad}
                description="Smoked ham, smoked turkey, lettuce, tomatoes, boiled egg, american cheese, and bacon."
                price="11.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-xl"
                itemTitle="Grilled Chicken Ceasar Salad"
                backgroundImage={chickenSalad}
                description="Romaine lettuce, croutons, shredded parmesan cheese. Topped with grilled chicken."
                price="13.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Greek Salad"
                backgroundImage={greekSalad}
                description="Crispy iceberg lettuce, tomato, cucumbers, bell peppers, onions, greek pitted black olives, feta cheese & pepperoncini peppers. ADD Chicken: $5.29"
                price="9.99"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
