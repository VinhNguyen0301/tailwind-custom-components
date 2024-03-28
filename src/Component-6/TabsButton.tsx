import React from "react";

const TabsButton = () => {
  return (
    <div>
      <ul className="mt-4 flex flex-wrap justify-center text-center text-sm font-medium text-gray-500 dark:text-gray-400">
        <li className=" border border-gray-300 bg-gray-200">
          <a
            href="#"
            className="active inline-block bg-blue-600 px-4 py-3 text-white"
            aria-current="page"
          >
            Transactions
          </a>
        </li>
        <li className=" border border-gray-300 bg-gray-200">
          <a
            href="#"
            className="inline-block px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Dollar Value
          </a>
        </li>
        <li className=" border border-gray-300 bg-gray-200">
          <a
            href="#"
            className="inline-block px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Quantity
          </a>
        </li>
        <li className=" border border-gray-300 bg-gray-200">
          <a
            href="#"
            className="inline-block px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Containers
          </a>
        </li>
        <li className=" border border-gray-300 bg-gray-200">
          <a
            href="#"
            className="inline-block px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Weight
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TabsButton;
