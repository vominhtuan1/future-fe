import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { UserIcon } from "../../icon";
import { useNavigate } from "react-router-dom";

export default function SubMenu() {
  const navigate = useNavigate();

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="py-2 text-sm">
            <UserIcon />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-fit ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-light-gray" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm whitespace-nowrap`}
                  >
                    Trang cá nhân
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      navigate("/order-history?status=pending");
                    }}
                    className={`${
                      active ? "bg-light-gray" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm whitespace-nowrap`}
                  >
                    Đơn hàng
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-light-gray" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm whitespace-nowrap`}
                  >
                    Đăng xuất
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
