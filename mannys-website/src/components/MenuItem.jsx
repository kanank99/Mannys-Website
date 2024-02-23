import React from "react";

function MenuItem(props) {
  return (
    <div className="w-full lg:w-[48%] sm:h-[200px] rounded-lg overflow-hidden border border-gray-400 shadow-lg bg-[#ddd56204] relative">
      <div className=" "></div>
      {props.hasBadge ? (
        props.mobile ? (
          <span className="absolute top-5 right-4 bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
            {props.badge}
          </span>
        ) : (
          <span className="absolute top-3 left-3 bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
            {props.badge}
          </span>
        )
      ) : null}
      <div className="flex flex-col sm:flex-row items-center justify-between h-full">
        <div className="grow-[2] flex-col p-4 pt-2 w-full">
          <h1 className={`${props.titleFontSize} font-bold text-[#138AB5]`}>
            {props.itemTitle}
          </h1>
          <p className="text-sm w-[90%] my-2 text-[#565462] font-serif">
            {props.description}
          </p>
          <p className="text-xl font-semibold text-black sm:translate-y-2">
            ${props.price}
          </p>
        </div>

        <img
          className="
           max-[640px]:w-full min-w-[200px] sm:max-w-[200px] sm:h-[200px] max-h-[200px] object-cover grow-[1]
          "
          src={props.backgroundImage}
          alt={props.itemTitle}
        />
      </div>
    </div>
  );
}

export default MenuItem;
