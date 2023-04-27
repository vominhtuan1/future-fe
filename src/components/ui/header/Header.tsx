import React from "react";

import FutureIcon from "../../icon/future";
import CartIcon from "../../icon/cart";
import SearchIcon from "../../icon/search";
import UserIcon from "../../icon/user";
import LetterIcon from "../../icon/letter";
import { MobileIcon } from "../../icon";

const Header = () => {
  return (
    <header className="flex bg-teal-800 flex-col">
      <div className="flex justify-between mt-2 px-10 bg-white items-center h-[60px]">
        <FutureIcon></FutureIcon>
        <div className="flex justify-between items-center">
          <div className="mr-5">
            <SearchIcon></SearchIcon>
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
        <div className="flex justify-items-start mr-3">
          <div className="mr-1">
            <LetterIcon></LetterIcon>
          </div>
          <p>Futur.info@gmail.com</p>
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
