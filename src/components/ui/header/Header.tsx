import React from "react";

import FutureIcon from "../../icon/future";
import CartIcon from "../../icon/cart";
import SearchIcon from "../../icon/search";
import UserIcon from "../../icon/user";
import LetterIcon from "../../icon/letter";
import { MobileIcon } from "../../icon";

const Header = () => {
  return (
    <header className="flex flex-col bg-teal-800">
      <div className="flex justify-between mt-2 px-10 bg-white items-center h-[60px]">
        <FutureIcon></FutureIcon>
        <div className="flex items-center justify-between">
          <div className="flex items-center mr-5 gap-x-3 group">
            <input className="w-0 px-2 py-1 transition-all duration-300 ease-in border-2 border-transparent outline-none group-hover:border-philippine-gray group-hover:block group-hover:w-80" />
            <SearchIcon className=""></SearchIcon>
          </div>
          <div className="mr-5">
            <UserIcon></UserIcon>
          </div>
          <div>
            <CartIcon></CartIcon>
          </div>
        </div>
      </div>
      <div className="flex items-center h-[50px] text-amber-100 px-10">
        <div className="flex mr-3 justify-items-start">
          <div className="mr-1">
            <LetterIcon></LetterIcon>
          </div>
          <p>Future.info@gmail.com</p>
        </div>
        <div className="flex justify-items-start">
          <div>
            <MobileIcon></MobileIcon>
          </div>
          <p>+1363-343-677</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
