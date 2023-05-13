import React from "react";

import FutureIcon from "../../icon/future";
import CircleBtn from "../../form/button-circle/social-btn";
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  TiktokIcon,
} from "../../icon";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-white">
      <div className="flex p-10 gap-x-24">
        <div>
          <div className="mb-5">
            <FutureIcon />
          </div>
          <p className="mb-[30px]">
            Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
            facilisi vivamus proin lit laoreet phasel alilus porttitor inter,
            facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
          </p>
          <div className="flex gap-x-5">
            <CircleBtn type="wheat">
              <InstagramIcon />
            </CircleBtn>
            <CircleBtn type="wheat">
              <FacebookIcon />
            </CircleBtn>
            <CircleBtn type="wheat">
              <TwitterIcon />
            </CircleBtn>
            <CircleBtn type="wheat">
              <TiktokIcon />
            </CircleBtn>
          </div>
        </div>

        <div>
          <h5 className="text-heading-7 leading-[35px] font-semibold mb-5">
            Customer
          </h5>
          <ul className="space-y-5 text-heading-9 whitespace-nowrap">
            <li>Order Status</li>
            <li>Collections</li>
            <li>Our Story</li>
            <li>Affiliates</li>
            <li>Security</li>
          </ul>
        </div>

        <div>
          <h5 className="text-heading-7 leading-[35px] font-semibold mb-5">
            Information
          </h5>
          <ul className="space-y-5 text-heading-9 whitespace-nowrap">
            <li>Customer Service</li>
            <li>Careers</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="shrink-0">
          <h5 className="text-heading-7 leading-[35px] font-semibold mb-5">
            Follow Us
          </h5>

          <div className="grid grid-cols-3 gap-x-[15px] gap-y-5">
            <img
              src="./footer6.png"
              alt="6"
              className="h-[105px] aspect-square"
            />
            <img
              src="./footer5.png"
              alt="5"
              className="h-[105px] aspect-square"
            />
            <img
              src="./footer4.png"
              alt="4"
              className="h-[105px] aspect-square"
            />
            <img
              src="./footer3.png"
              alt="3"
              className="h-[105px] aspect-square"
            />

            <img
              src="./footer2.png"
              alt="2"
              className="h-[105px] aspect-square"
            />

            <img
              src="./footer1.png"
              alt="1"
              className="h-[105px] aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between p-10">
        <p className="">© Copyright 2022 Furgan. All Rights Reserved.</p>
        <div className="flex justify-between">
          <p className="mr-5">Terms of condition</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
