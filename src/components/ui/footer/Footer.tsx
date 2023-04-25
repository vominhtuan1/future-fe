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
      <div className="flex justify-between p-10">
        <div className="flex justify-between flex-col flex-initial w-[600px]">
          <div className="mb-8">
            <FutureIcon></FutureIcon>
          </div>
          <span className="mb-8">
            Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
            facilisi vivamus proin lit laoreet phasel alilus porttitor inter,
            facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
          </span>
          <div className="flex">
            <CircleBtn type="wheat" className="mr-3">
              <InstagramIcon />
            </CircleBtn>
            <CircleBtn type="wheat" className="mr-3">
              <FacebookIcon />
            </CircleBtn>
            <CircleBtn type="wheat" className="mr-3">
              <TwitterIcon />
            </CircleBtn>
            <CircleBtn type="wheat" className="mr-3">
              <TiktokIcon />
            </CircleBtn>
          </div>
        </div>
        <div className="flex-initial w-[180px]">
          <h2 className="text-lg">Customer</h2>
          <ul>
            <li>Order Status</li>
            <li>Collections</li>
            <li>Our Story</li>
            <li>Affiliates</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="flex-initial w-[180px]">
          <h2 className="text-lg">Information</h2>
          <ul>
            <li>Customer Service</li>
            <li>Careers</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex-initial w-[380px]">
          <h2 className="text-lg">Follow Us</h2>

          <div className="flex flex-wrap">
            <div className="w-[80px] h-[80px] overflow-hidden flex bg-slate-200 mr-4 mb-4">
              <img
                src="/src/images/footer6.png"
                alt=""
                className="inline-block object-cover"
              />
            </div>
            <div className="w-[80px] h-[80px] overflow-hidden flex bg-slate-200 mr-4 mb-4">
              <img
                src="/src/images/footer5.png"
                alt=""
                className="inline-block object-cover"
              />
            </div>
            <div className="w-[80px] h-[80px] overflow-hidden flex bg-slate-200 mr-4 mb-4">
              <img
                src="/src/images/footer4.png"
                alt=""
                className="inline-block object-cover"
              />
            </div>
            <div className="w-[80px] h-[80px] overflow-hidden flex bg-slate-200 mr-4 mb-4">
              <img
                src="/src/images/footer3.png"
                alt=""
                className="inline-block object-cover"
              />
            </div>
            <div className="w-[80px] h-[80px] overflow-hidden flex bg-slate-200 mr-4 mb-4">
              <img
                src="/src/images/footer2.png"
                alt=""
                className="inline-block object-cover"
              />
            </div>
            <div className="w-[80px] h-[80px] overflow-hidden flex bg-slate-200 mr-4 mb-4">
              <img
                src="/src/images/footer1.png"
                alt=""
                className="inline-block object-cover"
              />
            </div>
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
