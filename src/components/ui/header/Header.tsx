import React from "react";

import Future from "../../icon/future";
import Cart from "../../icon/cart";
import Search from "../../icon/search";
import User from "../../icon/user";
import Letter from "../../icon/letter";
import Phone from "../../icon/phone";
const Header = () => {
  return (
    <header className="top-0 left-0 flex flex-col bg-teal-800 w-1440 h-200">
      <div className="flex justify-between p-3 mt-2 bg-white">
        <Future />
        <div className="flex justify-around">
          <div className="mr-2">
            <Search />
          </div>
          <div className="mr-2">
            <User />
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </div>
      <div className="left-0 right-0 top-3/100 bottom-19/50">
        <div className="flex m-2 mb-3 text-yellow-200">
          <div className="flex mr-3 justify-items-start">
            <Letter />
            Futur.info@gmail.com
          </div>
          <div className="flex justify-items-start">
            <Phone />
            +1363-343-677
          </div>
        </div>
        <div className="buttonCircle"></div>
      </div>
    </header>
  );
};

export default Header;
