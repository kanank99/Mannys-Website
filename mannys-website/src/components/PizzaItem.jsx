import React from "react";

function PizzaItem(props) {
  return (
    <div className="w-full lg:w-[48%] h-[200px] rounded-lg overflow-hidden border border-gray-400 shadow-lg bg-[#ddd56204] relative">
      <div className=" "></div>
      {props.hasBadge ? (
        props.mobile ? (
          <span
            className={`absolute top-0 right-0 sm:top-5 sm:right-4 ${props.badgeColor} ${props.badgeTextColor} text-xs font-medium sm:me-2 px-2.5 py-0.5 sm:rounded rounded-bl`}
          >
            {props.badge}
          </span>
        ) : (
          <span
            className={`absolute top-3 left-3 ${props.badgeColor} ${props.badgeTextColor} text-xs font-medium me-2 px-2.5 py-0.5 rounded`}
          >
            {props.badge}
          </span>
        )
      ) : null}
      <div className="flex flex-col items-center h-full pt-3 sm:pt-5 relative">
        <div className="flex flex-col items-center">
          <h1
            className={`${props.titleFontSize} font-bold text-[#ed0d01] text-center mb-2`}
          >
            {props.itemTitle}
          </h1>
          <p
            className={`${
              props.mobile ? props.mobileDescriptionFontSize : "text-md"
            } text-[#565462] font-serif w-[80%] sm:w-full md:w-[85%] text-center`}
          >
            {props.description}
          </p>
        </div>

        <div className="absolute flex bottom-5 mt-6 gap-4">
          <div className="sm:text-xl text-[#BBB260] flex flex-col">
            <p className="uppercase">7 inch</p>
            <p className="font-semibold text-xl text-center">
              ${props.price7inch}
            </p>
          </div>
          <div className="sm:text-xl text-[#BBB260] flex flex-col">
            <p className="uppercase">10 inch</p>
            <p className="font-semibold text-xl text-center">
              ${props.price10inch}
            </p>
          </div>
          <div className="sm:text-xl text-[#BBB260] flex flex-col">
            <p className="uppercase">13 inch</p>
            <p className="font-semibold text-xl text-center">
              ${props.price13inch}
            </p>
          </div>
          <div className="sm:text-xl text-[#BBB260] flex flex-col">
            <p className="uppercase">16 inch</p>
            <p className="font-semibold text-xl text-center">
              ${props.price16inch}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaItem;
