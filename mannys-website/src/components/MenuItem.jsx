import React from "react";

function MenuItem(props) {
  return (
    <div className="w-[600px] h-[200px] rounded-lg overflow-hidden border border-gray-400 shadow-lg bg-[#ddd56204]">
      <div className="flex items-center">
        <div className="grow-[2] flex-col p-4">
          <h1 className="text-xl font-bold text-[#138AB5]">
            {props.itemTitle}
          </h1>
          <p className="text-sm w-[90%] my-2 text-[#565462] font-serif">
            {props.description}
          </p>
          <p className="text-xl font-bold text-[#DD2026]">${props.price}</p>
        </div>

        <img
          className="
            w-[200px] h-[200px] object-cover grow-[1]
          "
          src={props.backgroundImage}
          alt={props.itemTitle}
        />
      </div>
    </div>
  );
}

export default MenuItem;
