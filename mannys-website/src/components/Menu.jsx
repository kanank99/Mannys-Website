import React from "react";
import { useState, useEffect, useRef } from "react";
import arrow from "../assets/arrow.svg";
import introImg from "../assets/menu/menuIntroImg.png";
import MenuItem from "./MenuItem";
import PizzaItem from "./PizzaItem";
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
import beefPita from "../assets/menu/beefPita.jpg";
import Gyro from "../assets/menu/gyro.jpg";
import spinachPie from "../assets/menu/spinachPie.jpg";
import chickenCalzone from "../assets/menu/chickenCalzone.jpg";
import vegetableSub from "../assets/menu/vegetableSub.jpg";
import meatballSub from "../assets/menu/meatballSub.jpg";
import chickenParmesanSub from "../assets/menu/chickenParmesanSub.jpg";
import italianSub from "../assets/menu/italianSub.jpg";
import phillySteakSub from "../assets/menu/phillySteakSub.jpg";
import houseburgerSub from "../assets/menu/houseburgerSub.jpg";
import countryPasta from "../assets/menu/countryPasta.jpg";
import bakedEggplantParmesan from "../assets/menu/bakedEggplantParmesan.jpg";
import lasagna from "../assets/menu/lasagna.jpg";
import pastaPlate from "../assets/menu/pastaPlate.jpg";
import greekSpaghetti from "../assets/menu/greekSpaghetti.jpg";
import chickenFlorentine from "../assets/menu/chickenFlorentine.jpg";
import georgiaSpaghetti from "../assets/menu/georgiaSpaghetti.jpg";
import sicillianChicken from "../assets/menu/sicillianChicken.jpg";
import cajunChickenPasta from "../assets/menu/cajunChickenPasta.png";
import fettuccineCarbonara from "../assets/menu/fettuccineCarbonara.jpg";

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
              "Salads",
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
                <a
                  href={`#${category}`}
                  className={`text-md md:text-lg font-semibold px-[20px] md:px-[40px] w-full h-[30px] flex ${
                    selectedCategory === "Specials"
                      ? null
                      : "border-l border-[#aaa]"
                  } items-center text-nowrap bg-gradient-to-r from-[#004f71] to-[#085a83] bg-clip-text text-transparent cursor-pointer categoryUnderline relative`}
                >
                  {category}
                </a>
              ) : (
                <a
                  href={`#${category}`}
                  className={`text-md md:text-lg font-semibold px-[20px] md:px-[40px] ${
                    category === "Specials" ? null : "border-l border-[#aaa]"
                  }  w-full h-[30px] flex items-center text-nowrap cursor-pointer`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </a>
              )
            )}
          </div>
        </div>
        {/*Menu Navigation and Search*/}

        <div className="max-w-[1200px] mt-[50px] mx-auto">
          <div className="flex flex-col px-8 min-[1270px]:px-0">
            <h1 id="Specials" className="text-black text-2xl font-semibold">
              Specials
            </h1>
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
                  price="15.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={true}
                  titleFontSize="text-2xl"
                  badge="Tuesday"
                  itemTitle="Baked Ziti"
                  backgroundImage={Tuesday}
                  description="Pasta layered with meat sauce, ricotta, mozzarella, and Parmesan, baked until golden."
                  price="11.99"
                  subtext="**ADD mushrooms, sausage, or meatballs - $15.99**"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                {/*WRONG PRICE*/}
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
                  subtext="**White Zinfandel is a great compliment with this dish**"
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
                  price="15.49"
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
            <h1
              id="Appetizers"
              className="text-black text-2xl font-semibold mt-10"
            >
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
            <h1 id="Salads" className="text-black text-2xl font-semibold mt-10">
              Salads
            </h1>
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
            <h1
              id="Greek Classics"
              className="text-black text-2xl font-semibold mt-10"
            >
              Greek Classics
            </h1>
            <p className="text-[#565462] text-lg font-serif mb-6">
              Authentic Greek cuisine
            </p>
            <div className="hidden lg:block">
              <div className="flex justify-between gap-3 mt-[20px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-xl"
                  itemTitle="Marinated Beef on Pita"
                  backgroundImage={beefPita}
                  description="Beef, onions, tomatoes, lettuce, and tzatziki sauce. Served with fries."
                  price="10.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Gyro"
                  backgroundImage={Gyro}
                  description="Lamb-beef, onions, tomatoes, lettuce, and tzatziki sauce."
                  price="10.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Spinach Pie"
                  backgroundImage={spinachPie}
                  description="Filo dough stuffed with spinach and feta cheese served with pita bread and tzatziki sauce."
                  price="14.99"
                />
              </div>
            </div>

            <div className="lg:hidden flex flex-col gap-4 mt-[20px]">
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-xl"
                itemTitle="Marinated Beef on Pita"
                backgroundImage={beefPita}
                description="Beef, onions, tomatoes, lettuce, and tzatziki sauce. Served with fries."
                price="10.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Gyro"
                backgroundImage={Gyro}
                description="Lamb-beef, onions, tomatoes, lettuce, and tzatziki sauce."
                price="10.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Spinach Pie"
                backgroundImage={spinachPie}
                description="Filo dough stuffed with spinach and feta cheese served with pita bread and tzatziki sauce."
                price="14.99"
              />
            </div>
            <h1 id="Pizza" className="text-black text-2xl font-semibold mt-10">
              Pizza
            </h1>
            <p className="text-[#565462] text-lg font-serif mb-6">
              Our family recipe uses nothing but the finest ingredients…{" "}
              <b>Say Cheese!!!</b>
            </p>

            <div className="relative w-full rounded h-[800px] border border-gray-400 shadow-lg bg-[#ddd56204] overflow-hidden pizzaBg bg-cover bg-center bg-no-repeat">
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000054] z-10"></div>
              <div className="relative z-20 flex justify-center items-center h-full">
                <div className="backdrop-blur-sm bg-white/10 rounded-lg flex flex-col gap-5 lg:gap-[40px] p-5 border border-gray-400">
                  <div className="flex flex-col md:flex-row md:gap-8 lg:gap-[60px]">
                    <div className="text-white">
                      <h2 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 text-[#ed0d01] word-stroke-1-pizza">
                        PERSONAL PIZZA 7″
                      </h2>
                      <p className="lg:text-[1.2rem]">Cheese - $6.79</p>
                      <p className="lg:text-[1.2rem]">
                        Additional Toppings - $1.49
                      </p>
                      <p className="lg:text-[1.2rem]">Extra Cheese - $1.79</p>
                    </div>
                    <div className="text-white">
                      <h2 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 text-[#ed0d01] word-stroke-1-pizza">
                        SMALL PIZZA 10″
                      </h2>
                      <p className="lg:text-[1.2rem]">Cheese - $10.49</p>
                      <p className="lg:text-[1.2rem]">1 topping - $11.49</p>
                      <p className="lg:text-[1.2rem]">2 toppings - $12.49</p>
                      <p className="lg:text-[1.2rem]">3 toppings - $13.49</p>
                      <p className="lg:text-[1.2rem]">4 toppings - $14.49</p>
                      <p className="lg:text-[1.2rem]">
                        Additional Toppings - $2.79
                      </p>
                      <p className="lg:text-[1.2rem]">Extra Cheese - $3.49</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:gap-8 lg:gap-[60px]">
                    <div className="text-white">
                      <h2 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 text-[#ed0d01] word-stroke-1-pizza">
                        MEDIUM PIZZA 13″
                      </h2>
                      <p className="lg:text-[1.2rem]">Cheese - $13.49</p>
                      <p className="lg:text-[1.2rem]">1 topping - $14.49</p>
                      <p className="lg:text-[1.2rem]">2 toppings - $15.49</p>
                      <p className="lg:text-[1.2rem]">3 toppings - $16.49</p>
                      <p className="lg:text-[1.2rem]">4 toppings - $17.49</p>
                      <p className="lg:text-[1.2rem]">
                        Additional Toppings - $3.49
                      </p>
                      <p className="lg:text-[1.2rem]">Extra Cheese - $4.49</p>
                    </div>
                    <div className="text-white">
                      <h2 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 text-[#ed0101] word-stroke-1-pizza">
                        LARGE PIZZA 16″
                      </h2>
                      <p className="lg:text-[1.2rem]">Cheese - $16.99</p>
                      <p className="lg:text-[1.2rem]">1 topping - $19.99</p>
                      <p className="lg:text-[1.2rem]">2 toppings - $21.99</p>
                      <p className="lg:text-[1.2rem]">3 toppings - $22.99</p>
                      <p className="lg:text-[1.2rem]">4 toppings - $23.99</p>
                      <p className="lg:text-[1.2rem]">
                        Additional Toppings - $4.99
                      </p>
                      <p className="lg:text-[1.2rem]">Extra Cheese - $5.99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* pizza toppings */}

            <div className="relative z-20 mt-10 rounded-lg backdrop-blur-lg bg-white/20 p-5 border border-gray-400 shadow-xl">
              <h2 className="text-3xl font-bold text-black mb-6 text-center">
                Choose Your Favorite Toppings
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 text-black text-xl transition-all duration-300 ease-in-out">
                <div className="flex items-center justify-center text-lg lg:text-xl topping-item hover:scale-105 transform transition duration-300 ease-out cursor-pointer shadow-lg p-2 rounded-lg bg-[#ff0000]/40">
                  Pepperoni
                </div>
                <div className="flex items-center justify-center text-lg lg:text-xl topping-item hover:scale-105 transform transition duration-300 ease-out cursor-pointer shadow-lg p-2 rounded-lg bg-[#faa307]/40">
                  Bacon
                </div>
                <div className="flex items-center justify-center text-lg lg:text-xl topping-item hover:scale-105 transform transition duration-300 ease-out cursor-pointer shadow-lg p-2 rounded-lg bg-[#f48c06]/40">
                  Seasoned Ground Beef
                </div>
                <div className="flex items-center justify-center text-lg lg:text-xl topping-item hover:scale-105 transform transition duration-300 ease-out cursor-pointer shadow-lg p-2 rounded-lg bg-[#e85d04]/40">
                  Imported Ham
                </div>
                <div className="flex items-center justify-center text-lg lg:text-xl topping-item hover:scale-105 transform transition duration-300 ease-out cursor-pointer shadow-lg p-2 rounded-lg bg-[#dc2f02]/40">
                  Fontanini Sausage
                </div>
                <div className="flex items-center justify-center text-lg lg:text-xl topping-item hover:scale-105 transform transition duration-300 ease-out cursor-pointer shadow-lg p-2 rounded-lg bg-[#d00000]/40">
                  Sliced Black Olives
                </div>
                <div className="flex items-center justify-center text-lg lg:text-xl topping-item hover:scale-105 transform transition duration-300 ease-out cursor-pointer shadow-lg p-2 rounded-lg bg-[#9d0208]/40">
                  Tomatoes
                </div>
                <div className="flex items-center justify-center text-lg lg:text-xl topping-item hover:scale-105 transform transition duration-300 ease-out cursor-pointer shadow-lg p-2 rounded-lg bg-[#6a040f]/40">
                  Bell Peppers
                </div>
                <div className="flex items-center justify-center text-lg lg:text-xl topping-item hover:scale-105 transform transition duration-300 ease-out cursor-pointer shadow-lg p-2 rounded-lg bg-[#370617]/40">
                  Mushrooms
                </div>
                <div className="flex items-center justify-center text-lg lg:text-xl topping-item hover:scale-105 transform transition duration-300 ease-out cursor-pointer shadow-lg p-2 rounded-lg bg-[#03071e]/40">
                  Onions
                </div>
                <div className="flex items-center justify-center text-lg lg:text-xl topping-item hover:scale-105 transform transition duration-300 ease-out cursor-pointer shadow-lg p-2 rounded-lg bg-[#8338ec]/40">
                  Sweet Banana Peppers
                </div>
                <div className="flex items-center justify-center text-lg lg:text-xl topping-item hover:scale-105 transform transition duration-300 ease-out cursor-pointer shadow-lg p-2 rounded-lg bg-[#fb5607]/40">
                  Jalapenos
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex justify-between gap-3 mt-[20px]">
                <PizzaItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Hawaiian"
                  description="Mushrooms, ham pineapple, mozzarella, and feta cheese."
                  price7inch="11.49"
                  price10inch="14.49"
                  price13inch="20.49"
                  price16inch="24.99"
                />
                <PizzaItem
                  mobile={false}
                  hasBadge={true}
                  badge="CHEF SPECIAL"
                  badgeColor="bg-[#000]"
                  badgeTextColor="text-yellow-400"
                  titleFontSize="text-2xl"
                  itemTitle="House Special"
                  description="Hamburger, pepperoni, italian sausage, mushrooms, black olives, onions, bell peppers, and mozzarella cheese."
                  price7inch="11.49"
                  price10inch="14.49"
                  price13inch="20.49"
                  price16inch="24.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <PizzaItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Greek"
                  description="Gyro meat, sliced tomatoes, black olives, mozzarella, and feta cheese."
                  price7inch="11.49"
                  price10inch="14.49"
                  price13inch="20.49"
                  price16inch="24.99"
                />
                <PizzaItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Extra House Speical"
                  description="Hamburger, pepperoni, italian sausage, ham, bacon, mushrooms, black olives, onions, bell peppers, and mozzarella cheese."
                  price7inch="11.49"
                  price10inch="14.49"
                  price13inch="20.49"
                  price16inch="24.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <PizzaItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Vegetarian"
                  description="Onions, bell peppers, black olives, mushrooms, tomatoes, and mozzarella cheese."
                  price7inch="11.49"
                  price10inch="14.49"
                  price13inch="20.49"
                  price16inch="24.99"
                />
                <PizzaItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Meat Lovers"
                  description="Hamburger, pepperoni, italian sausage, ham, bacon, canadian bacon, and mozzarella cheese."
                  price7inch="11.49"
                  price10inch="14.49"
                  price13inch="20.49"
                  price16inch="24.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <PizzaItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Philly Steak Pizza"
                  description="Philly steak, onions, bell peppers, mushrooms, and mozzarella cheese."
                  price7inch="11.49"
                  price10inch="14.49"
                  price13inch="20.49"
                  price16inch="28.99"
                />
                <PizzaItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Philly Chicken Pizza"
                  description="Grilled chicken, onions, bell peppers, mushrooms, and mozzarella cheese."
                  price7inch="11.49"
                  price10inch="14.49"
                  price13inch="20.49"
                  price16inch="28.99"
                />
              </div>
            </div>

            <div className="lg:hidden flex flex-col gap-4 mt-[20px]">
              <PizzaItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Hawaiian"
                description="Mushrooms, ham pineapple, mozzarella, and feta cheese."
                price7inch="11.49"
                price10inch="14.49"
                price13inch="20.49"
                price16inch="24.99"
              />
              <PizzaItem
                mobile={true}
                hasBadge={true}
                badge="CHEF SPECIAL"
                badgeColor="bg-[#000]"
                badgeTextColor="text-yellow-400"
                titleFontSize="text-2xl"
                itemTitle="House Special"
                description="Hamburger, pepperoni, italian sausage, mushrooms, black olives, onions, bell peppers, and mozzarella cheese."
                mobileDescriptionFontSize="text-sm"
                price7inch="11.49"
                price10inch="14.49"
                price13inch="20.49"
                price16inch="24.99"
              />
              <PizzaItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Greek"
                description="Gyro meat, sliced tomatoes, black olives, mozzarella, and feta cheese."
                price7inch="11.49"
                price10inch="14.49"
                price13inch="20.49"
                price16inch="24.99"
              />
              <PizzaItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Extra House Speical"
                description="Hamburger, pepperoni, italian sausage, ham, bacon, mushrooms, black olives, onions, bell peppers, and mozzarella."
                mobileDescriptionFontSize="text-sm"
                price7inch="11.49"
                price10inch="14.49"
                price13inch="20.49"
                price16inch="24.99"
              />
              <PizzaItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Vegetarian"
                description="Onions, bell peppers, black olives, mushrooms, tomatoes, and mozzarella cheese."
                price7inch="11.49"
                price10inch="14.49"
                price13inch="20.49"
                price16inch="24.99"
              />
              <PizzaItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Meat Lovers"
                description="Hamburger, pepperoni, italian sausage, ham, bacon, canadian bacon, and mozzarella cheese."
                price7inch="11.49"
                price10inch="14.49"
                price13inch="20.49"
                price16inch="24.99"
              />
              <PizzaItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Philly Steak Pizza"
                description="Philly steak, onions, bell peppers, mushrooms, and mozzarella cheese."
                price7inch="11.49"
                price10inch="14.49"
                price13inch="20.49"
                price16inch="28.99"
              />
              <PizzaItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Philly Chicken Pizza"
                description="Grilled chicken, onions, bell peppers, mushrooms, and mozzarella cheese."
                price7inch="11.49"
                price10inch="14.49"
                price13inch="20.49"
                price16inch="28.99"
              />
            </div>
            <h1
              id="Calzones"
              className="text-black text-2xl font-semibold mt-10"
            >
              Calzones
            </h1>
            <p className="text-[#565462] text-lg font-serif mb-6">
              Calzones are made with our homemade dough, stuffed with meat
              sauce, a hint of seasoning, and a special blend of cheeses, and
              baked in our oven topped with cheese. Specialty Calzones include
              onions and bell peppers.
            </p>
            <div className="hidden lg:block">
              <div className="flex justify-between gap-3 mt-[20px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Chicken Calzone"
                  backgroundImage={chickenCalzone}
                  description="Grilled chicken, onions, bell peppers, and mozzarella cheese."
                  multiplePrices={true}
                  price1="13.99"
                  price2="18.99"
                  price1Head="Small"
                  price2Head="Large"
                />
              </div>
            </div>

            <div className="lg:hidden flex flex-col gap-4 mt-[20px]">
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Chicken Calzone"
                backgroundImage={chickenCalzone}
                description="Grilled chicken, onions, bell peppers, and mozzarella cheese."
                multiplePrices={true}
                price1="13.99"
                price2="18.99"
                price1Head="Small"
                price2Head="Large"
              />
            </div>
            <h1 id="Subs" className="text-black text-2xl font-semibold mt-10">
              Hot Oven Subs
            </h1>
            <p className="text-[#565462] text-lg font-serif mb-6">
              All Subs come in Small (8″). Served with french fries and a
              pickle.
            </p>
            <div className="hidden lg:block">
              <div className="flex justify-between gap-3 mt-[20px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Vegetable Sub"
                  backgroundImage={vegetableSub}
                  description="Black olives, mushrooms, lettuce, tomatoes, onions, bell peppers, cheese, oil and vinegar, and mayo."
                  price="10.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Meatball Sub"
                  backgroundImage={meatballSub}
                  description="Meatball, meat sauce, and cheese. No veggies."
                  price="10.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Chicken Parmesan Sub"
                  backgroundImage={chickenParmesanSub}
                  description="Fried chicken, meat sauce, and cheese."
                  price="10.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Italian Sub"
                  backgroundImage={italianSub}
                  description="ham, cooked salami, bologna, genoa salami, cheese, lettuce, tomatoes, onions, bell peppers, mayo and oil and vinegar."
                  price="10.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Philly Steak Sub"
                  backgroundImage={phillySteakSub}
                  description="Steak, cheese, and mayo. Famous in Philly. Add a dinner salad for $2.99."
                  price="11.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Houseburger Sub"
                  backgroundImage={houseburgerSub}
                  description="Hamburger pattie, bacon, mushrooms, american cheese, lettuce, tomatoes, onions, bell peppers, mayo, and oil and vinegar."
                  price="10.99"
                />
              </div>
            </div>

            <div className="lg:hidden flex flex-col gap-4 mt-[20px]">
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Vegetable Sub"
                backgroundImage={vegetableSub}
                description="Black olives, mushrooms, lettuce, tomatoes, onions, bell peppers, cheese, oil and vinegar, and mayo."
                price="10.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Meatball Sub"
                backgroundImage={meatballSub}
                description="Meatball, meat sauce, and cheese. No veggies."
                price="10.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Chicken Parmesan Sub"
                backgroundImage={chickenParmesanSub}
                description="Fried chicken, meat sauce, and cheese."
                price="10.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Italian Sub"
                backgroundImage={italianSub}
                description="ham, cooked salami, bologna, genoa salami, cheese, lettuce, tomatoes, onions, bell peppers, mayo and oil and vinegar."
                price="10.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Philly Steak Sub"
                backgroundImage={phillySteakSub}
                description="Steak, cheese, and mayo. Famous in Philly. Add a dinner salad for $2.99."
                price="11.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Houseburger Sub"
                backgroundImage={houseburgerSub}
                description="Hamburger pattie, bacon, mushrooms, american cheese, lettuce, tomatoes, onions, bell peppers, mayo, and oil and vinegar."
                price="10.99"
              />
            </div>
            <h1
              id="Classics"
              className="text-black text-2xl font-semibold mt-10"
            >
              Manny's Classics
            </h1>
            <p className="text-[#565462] text-lg font-serif mb-6">
              All classics are served with a dinner salad and garlic bread.
            </p>
            <div className="hidden lg:block">
              <div className="flex justify-between gap-3 mt-[20px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Counrty Pasta"
                  backgroundImage={countryPasta}
                  description="Spaghetti, marinated chicken, onions, bell peppers, meat sauce, and mozzarella cheese."
                  subtext="**White Zinfadel is a great compliment with this dish**"
                  price="13.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Baked Eggplant Parmesan"
                  backgroundImage={bakedEggplantParmesan}
                  description="Breaded eggplant, marinara sauce, and mozzarella cheese."
                  subtext="**White Zinfadel is a great compliment with this dish**"
                  price="13.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Homemade Lasagna"
                  backgroundImage={lasagna}
                  description="Your choice of veggi or meat lasagna, towering layers of noodles, a ruch homemade meat/or marinara sauce, mozzarella, and parmesan cheese."
                  subtext="**Pinot Grigio is a great compliment with this dish**"
                  price="13.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Pasta Plate"
                  backgroundImage={pastaPlate}
                  description="Cannelloni, manicotti, stuffed shells, meat and cheese ravioli, meatballs, sausage, mozzarella cheese, and meat sauce."
                  subtext="**White Zinfadel is a great compliment with this dish**"
                  price="13.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Greek Spaghetti"
                  backgroundImage={greekSpaghetti}
                  description="Spaghetti noodles covered in feta cheese, olive oil, and spices."
                  subtext="**Chardonnay is a great compliment with this dish**"
                  price="12.99 / ADD Grilled Chicken - $16.99"
                />
              </div>
            </div>

            <div className="lg:hidden flex flex-col gap-4 mt-[20px]">
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Counrty Pasta"
                backgroundImage={countryPasta}
                description="Spaghetti, marinated chicken, onions, bell peppers, meat sauce, and mozzarella cheese."
                subtext="**White Zinfadel is a great compliment with this dish**"
                price="13.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Baked Eggplant Parmesan"
                backgroundImage={bakedEggplantParmesan}
                description="Breaded eggplant, marinara sauce, and mozzarella cheese."
                subtext="**White Zinfadel is a great compliment with this dish**"
                price="13.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Homemade Lasagna"
                backgroundImage={lasagna}
                description="Your choice of veggi or meat lasagna, towering layers of noodles, a ruch homemade meat/or marinara sauce, mozzarella, and parmesan cheese."
                subtext="**Pinot Grigio is a great compliment with this dish**"
                price="13.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Pasta Plate"
                backgroundImage={pastaPlate}
                description="Cannelloni, manicotti, stuffed shells, meat and cheese ravioli, meatballs, sausage, mozzarella cheese, and meat sauce."
                subtext="**White Zinfadel is a great compliment with this dish**"
                price="13.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Greek Spaghetti"
                backgroundImage={greekSpaghetti}
                description="Spaghetti noodles covered in feta cheese, olive oil, and spices."
                subtext="**Chardonnay is a great compliment with this dish**"
                price="12.99 / ADD Grilled Chicken - $16.99"
              />
            </div>
            <h1 id="Salads" className="text-black text-2xl font-semibold mt-10">
              Famous Dishes
            </h1>
            <p className="text-[#565462] text-lg font-serif mb-6">
              All dishes are served with garlic bread and a salad.
            </p>
            <div className="hidden lg:block">
              <div className="flex justify-between gap-3 mt-[20px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Chicken Florentine"
                  backgroundImage={chickenFlorentine}
                  description="With penne noodles mixed with alfredo sauce, spinach, and grilled chicken."
                  price="14.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Georgia's Spaghetti"
                  backgroundImage={georgiaSpaghetti}
                  description="Spaghetti noodles with grilled chicken, olives, tomatoes, onions, feta cheese, cooked in olive oil, and spices."
                  price="14.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Sicillian Chicken"
                  backgroundImage={sicillianChicken}
                  description="With penne noodles, alfredo sauce, and pesto sauce topped with blackened chicken."
                  price="14.99"
                />
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Cajun Chicken Pasta"
                  backgroundImage={cajunChickenPasta}
                  description="With penne noodles, alfredo sauce, cajun seasoning, mixed with grilled chicken, and mixed veggies."
                  price="14.99"
                />
              </div>
              <div className="flex justify-between gap-3 mt-[40px]">
                <MenuItem
                  mobile={false}
                  hasBadge={false}
                  titleFontSize="text-2xl"
                  itemTitle="Fettuccine Carbonara"
                  backgroundImage={fettuccineCarbonara}
                  description="Fettuccine noodles with alfredo sauce mixed with ham, bacon, and mushrooms."
                  price="14.99"
                />
              </div>
            </div>

            <div className="lg:hidden flex flex-col gap-4 mt-[20px]">
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Chicken Florentine"
                backgroundImage={chickenFlorentine}
                description="With penne noodles mixed with alfredo sauce, spinach, and grilled chicken."
                price="14.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Georgia's Spaghetti"
                backgroundImage={georgiaSpaghetti}
                description="Spaghetti noodles with grilled chicken, olives, tomatoes, onions, feta cheese, cooked in olive oil, and spices."
                price="14.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Sicillian Chicken"
                backgroundImage={sicillianChicken}
                description="With penne noodles, alfredo sauce, and pesto sauce topped with blackened chicken."
                price="14.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Cajun Chicken Pasta"
                backgroundImage={cajunChickenPasta}
                description="With penne noodles, alfredo sauce, cajun seasoning, mixed with grilled chicken, and mixed veggies."
                price="14.99"
              />
              <MenuItem
                mobile={true}
                hasBadge={false}
                titleFontSize="text-2xl"
                itemTitle="Fettuccine Carbonara"
                backgroundImage={fettuccineCarbonara}
                description="Fettuccine noodles with alfredo sauce mixed with ham, bacon, and mushrooms."
                price="14.99"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
