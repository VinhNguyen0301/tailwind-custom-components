import React from "react";

const TabsButton = () => {
  return (
    <div>
      <ul className="flex flex-wrap text-center text-sm font-medium text-gray-500 dark:text-gray-400">
        <li className="me-2">
          <a
            href="#"
            className="active inline-block rounded-lg bg-blue-600 px-4 py-3 text-white"
            aria-current="page"
          >
            Tab 1
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Tab 2
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Tab 3
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Tab 4
          </a>
        </li>
        <li>
          <a className="inline-block cursor-not-allowed px-4 py-3 text-gray-400 dark:text-gray-500">
            Tab 5
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TabsButton;
