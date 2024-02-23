import React from "react";
import { useState, useEffect, useRef } from "react";
import lowResLogo from "../assets/lowResLogo.png";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openString, setSetOpenString] = useState("Open until 10:00 PM");
  const headerRef = useRef(null);

  // function that returns string based on if the current user time is within the range of the restaurant's opening hours
  const openOrClosed = () => {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = hour + minute / 60;
    const open = "Open until 10:00 PM";
    const closed = "Opens at 11:00 AM tomorrow";
    if (day === 0) {
      return closed;
    } else if (day === 1) {
      if (time >= 11 && time < 21) {
        return open;
      } else {
        return closed;
      }
    } else if (day === 2) {
      if (time >= 11 && time < 21) {
        return open;
      } else {
        return closed;
      }
    } else if (day === 3) {
      if (time >= 11 && time < 21) {
        return open;
      } else {
        return closed;
      }
    } else if (day === 4) {
      if (time >= 11 && time < 21) {
        return open;
      } else {
        return closed;
      }
    } else if (day === 5) {
      if (time >= 11 && time < 22) {
        return open;
      } else {
        return closed;
      }
    } else if (day === 6) {
      if (time >= 11 && time < 22) {
        return open;
      } else {
        return closed;
      }
    }
  };

  useEffect(() => {
    setSetOpenString(openOrClosed());
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <div
        id="banner"
        tabindex="-1"
        class="flex z-50 gap-8 justify-center items-center px-4 w-full min-h-9 bg-gradient-to-tl from-[#004F71] to-[#138AB5] hover:brightness-90 font-serif text-[14px] tracking-widest uppercase font-normal transition-all duration-300"
      >
        <p class="text-white">
          <span class="text-sm font-bold me-2 px-2.5 py-0.5 rounded border border-white font-sans">
            NEW
          </span>{" "}
          Buy a large <span className="font-sans font-bold">2</span> toppings
          pizza or more and get <span className="font-sans font-bold">10</span>{" "}
          jumbo wings for <span className="font-sans font-bold">$5.99</span>
        </p>
      </div>
      <div
        ref={headerRef}
        className="hidden md:flex justify-center items-center w-full min-h-[60px] bg-black text-white select-none"
      >
        <div className="w-full max-w-[1200px] flex justify-between px-8">
          <Link to="/" className="flex items-center">
            <img
              src={lowResLogo}
              alt="Manny's Logo"
              className="h-[50px] mt-2"
            />
          </Link>
          <div className="flex items-center gap-10 tracking-widest uppercase font-semibold text-[14px]">
            <Link to="/menu">Menu</Link>
            {/* <a href="#">Join Our Family</a> */}
            <a href="#">Specials</a>
            <a href="#">Catering</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex items-center">
            <div
              className="flex items-center gap-3 cursor-pointer relative"
              onClick={() => setIsOpen(!isOpen)}
            >
              <p className="text-[16px] tracking-wide">{openString}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                viewBox="0 0 20 20"
                class="h-4 w-4"
              >
                <path
                  d="M4.41 6.91a.833.833 0 0 1 1.18 0L10 11.323l4.41-4.411a.833.833 0 1 1 1.18 1.178l-5 5a.833.833 0 0 1-1.18 0l-5-5a.833.833 0 0 1 0-1.178Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div
                className={`z-50 absolute top-[160%] right-0 w-[240px] h-[245px] bg-[white] text-black rounded border border-black shadow-lg ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <div className="px-3 py-2 h-full select-none">
                  <div className="flex flex-col">
                    <div className="flex justify-between my-1">
                      <p className="">Sun:</p>
                      <p className="">Closed</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="">Mon:</p>
                      <p className="">11:00 AM - 9:00 PM</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="">Tue:</p>
                      <p className="">11:00 AM - 9:00 PM</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="">Wed:</p>
                      <p className="">11:00 AM - 9:00 PM</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="">Thu:</p>
                      <p className="">11:00 AM - 9:00 PM</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="">Fri:</p>
                      <p className="">11:00 AM - 10:00 PM</p>
                    </div>
                    <div className="flex justify-between my-1">
                      <p className="">Sat:</p>
                      <p className="">11:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for screens smaller than 800px */}
      {/* 
        <div className="w-full flex justify-center items-center min-h-[60px]">
             */}
    </>
  );
}

export default Header;
