import React from "react";

import Future from "../../icon/future";

const Footer = () => {
  return (
    <footer className="flex w-1440 h-200 bottom-0 right-0 flex-col bg-teal-800">
      <div className="flex justify-between p-9 bg-white">
        <div className="flex justify-between flex-col">
          <Future></Future>
          <span>
            <p>
              Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
              facilisi
            </p>
            <p>
              vivamus proin lit laoreet phasel alilus porttitor inter, facilisis
            </p>
            <p>condiment tarime egestas rhoncus dapibus iaculis alemir.</p>
          </span>
        </div>
        <div>
          <h2>Customer</h2>
          <ul>
            <li>Order Status</li>
            <li>Collections</li>
            <li>Our Story</li>
            <li>Affiliates</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h2>Information</h2>
          <ul>
            <li>Customer Service</li>
            <li>Careers</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h2>Follow Us</h2>

          <ol>
            <img src="../../../../public/ImageFooter6.png" alt="" />
            <img src="../../../../public/ImageFooter5.png" alt="" />
            <img src="../../../../public/ImageFooter4.png" alt="" />
            <img src="../../../../public/ImageFooter3.png" alt="" />
            <img src="../../../../public/ImageFooter2.png" alt="" />
            <img src="../../../../public/ImageFooter1.png" alt="" />
          </ol>
        </div>
      </div>
      <div className="flex justify-between p-9 bg-white mb-2">
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
