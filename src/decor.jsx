import React, { useState } from "react";
import {Farmhouse, Boho, Eclectic, Minimalist} from './components.jsx';


const Decor = () => {
  const [imageClicked, setImageClicked] = useState({
    farmhouse: true,
    boho: false,
    eclectic: false,
    minimalist: false,
  });
  const onClickHandler = (order) => {
    const resetImages = {
      farmhouse: false,
      boho: false,
      eclectic: false,
      minimalist: false,
    };
    setImageClicked({
      ...resetImages,
      [order]: true
    });
  };
  return (
    <div>
        <div className="mx-[calc(8px+2.5625vw)] mb-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          <div className="group flex flex-col items-center">
            <button onClick={() => onClickHandler("farmhouse")} className="mb-2 w-full whitespace-nowrap text-center text-xl font-light text-text-secondary group-hover:text-black">
              Modern Farmhouse
            </button>
            <div className="h-0.5 w-1 bg-[#dedede] ease-in-out duration-300 group-hover:bg-hover-text group-hover:w-full"></div>
          </div>
          <div className="group flex flex-col items-center">
            <button onClick={() => onClickHandler("boho")} className="mb-2 w-full text-right text-xl font-light text-text-secondary sm:text-center group-hover:text-black">
              Boho Decor
            </button>
           <div className="h-0.5 w-1 bg-[#dedede] ease-in-out duration-300 group-hover:bg-hover-text group-hover:w-full"></div>
          </div>
          <div className="invisible absolute group flex flex-col items-center sm:visible sm:relative">
            <button onClick={() => onClickHandler("eclectic")} className="mb-2 w-full text-center text-xl font-light text-text-secondary group-hover:text-black">
              Eclectic Decor
            </button>
           <div className="h-0.5 w-1 bg-[#dedede] ease-in-out duration-300 group-hover:bg-hover-text group-hover:w-full"></div>
          </div>
          <div className="invisible absolute group flex flex-col items-center lg:visible lg:relative">
            <button onClick={() => onClickHandler("minimalist")} className="mb-2 w-full text-center text-xl font-light text-text-secondary group-hover:text-black">
              Minimalist
            </button>
           <div className="h-0.5 w-1 bg-[#dedede] ease-in-out duration-300 group-hover:bg-hover-text group-hover:w-full"></div>
          </div>
          <div className="-z-10 self-end h-0.5 w-full bg-[#dedede] col-span-4 -translate-y-0.5"></div>
        </div>
      <div className="image">
        {imageClicked.farmhouse && <Farmhouse></Farmhouse>}
        {imageClicked.boho && <Boho></Boho>}
        {imageClicked.eclectic && <Eclectic></Eclectic>}
        {imageClicked.minimalist && <Minimalist></Minimalist>}
      </div>
    </div>
  );
};

export default Decor;