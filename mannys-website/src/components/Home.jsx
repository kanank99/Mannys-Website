import React from "react";
import MenuItem from "./MenuItem";
import lasagna from "../assets/menu/lasagna.jpg";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex justify-center items-center mt-[200px]">
        <MenuItem
          itemTitle="Homemade Lasagna"
          backgroundImage={lasagna}
          description="your choice of veggi or meat lasagna, towering layers of noodles, a ruch homemade meat/or marinara sauce, mozzarella, and parmesan cheese"
          price="13.99"
        />
      </div>
    </div>
  );
}

export default Home;
