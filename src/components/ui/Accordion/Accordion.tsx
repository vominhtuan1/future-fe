import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Accordion() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <h1 className="text-2xl font-black">Frequently asked questions</h1>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${open ? "text-emerald-500 border-b-0" : ""}
              flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-sm font-medium text-black-900 hover:bg-gray-200 focus:outline-none border-b-2`}
              >
                <span>How to buy a product?</span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform text-emerald-500" : ""
                  } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border-b-2">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${open ? "text-emerald-500 border-b-0" : ""}
              flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-sm font-medium text-black-900 hover:bg-gray-200 focus:outline-none border-b-2`}
              >
                <span>How can I make refund from your website?</span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform text-emerald-500" : ""
                  } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border-b-2">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${open ? "text-emerald-500 border-b-0" : ""}
              flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-sm font-medium text-black-900 hover:bg-gray-200 focus:outline-none border-b-2`}
              >
                <span>Why can&apos;t I select next day delivery?</span>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform text-emerald-500" : ""
                  } h-5 w-5 text-black-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border-b-2">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default Accordion;
