import React from "react";

import Future from "../../icon/future-icon";
import Cart from "../../icon/cart";
import Search from "../../icon/search";
import User from "../../icon/user";
import Letter from "../../icon/letter";
import Phone from "../../icon/phone";
const Header = () => {
  return (
    <header className="flex w-1440 h-200 top-0 left-0 bg-teal-800 flex-col">
      <div className="flex justify-between mt-2 p-3 bg-white">
        <Future></Future>
        <div className="flex justify-around">
          <div className="mr-2">
            <Search></Search>
          </div>
          <div className="mr-2">
            <User></User>
          </div>
          <div>
            <Cart></Cart>
          </div>
        </div>
      </div>
      <div className="left-0 right-0 top-3/100 bottom-19/50">
        <div className="flex m-2 mb-3 text-yellow-200">
          <div className="flex justify-items-start mr-3">
            <Letter></Letter>
            Futur.info@gmail.com
          </div>
          <div className="flex justify-items-start">
            <Phone></Phone>
            +1363-343-677
          </div>
        </div>
        <div className="buttonCircle"></div>
      </div>
    </header>
  );
};

export default Header;
